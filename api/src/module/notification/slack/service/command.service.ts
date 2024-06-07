import { InjectRedis } from '@nestjs-modules/ioredis';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Redis from 'ioredis';
import { SlackRepository } from '../repository/slack.repository';
import { BuilderService } from './builder.service';
import { WebClient, ConversationsOpenResponse } from '@slack/web-api';
import { SlashCommand } from '@slack/bolt';
import { UserInfoDto } from '../dto/user.dto';

@Injectable()
export class CommandService {
  constructor(
    public readonly configService: ConfigService,
    @InjectRedis() private readonly redis: Redis,
    private readonly slackRepository: SlackRepository,
    private readonly builderService: BuilderService
  ) {}

  async prizeInfoCommandHandler(command: SlashCommand): Promise<void> {
    // 저장된 토큰을 가져와 클라이언트를 생성합니다.
    const token: string = await this.slackRepository.getAccessToken(command.team_id);
    const client: WebClient = new WebClient(token);
    // 최신 로또 회차 정보를 가져옵니다.
    let recentlyDrwNo: number = Number(await this.redis.get('drwNo'));

    if (!recentlyDrwNo) {
      recentlyDrwNo = await this.slackRepository.getRecentlyDrwNo();
    }
    // 모달을 출력합니다.
    await client.views.open({
      trigger_id: command.trigger_id,
      view: {
        type: 'modal',
        title: {
          type: 'plain_text',
          text: '당첨 정보 조회',
        },
        blocks: await this.builderService.getPrizeInfoBlock(recentlyDrwNo),
        close: {
          type: 'plain_text',
          text: '닫기',
        },
        submit: {
          type: 'plain_text',
          text: '조회',
        },
      },
    });
  }

  async subscribeCommandHandler(command: SlashCommand): Promise<void> {
    // 저장된 토큰을 가져와 클라이언트를 생성합니다.
    const token: string = await this.slackRepository.getAccessToken(command.team_id);
    const client: WebClient = new WebClient(token);

    const userId: string = command.user_id;
    const teamId: string = command.team_id;
    // 유저와 앱 간의 개인 채널을 엽니다.
    const response: ConversationsOpenResponse = await client.conversations.open({
      users: userId,
    });
    // 유저의 정보를 조회합니다.
    const userInfo: UserInfoDto = await this.slackRepository.getUserInfo(teamId, userId);

    if (userInfo && userInfo.isSubscribe) {
      // 유저의 앱 채널에서 구독 취소 메시지를 발송합니다.
      await client.chat.postMessage({
        channel: response.channel.id,
        blocks: await this.builderService.getUnSubscribeInfoBlock(userId),
      });
    } else {
      // 유저의 앱 채널에서 구독 신청 메시지를 발송합니다.
      await client.chat.postMessage({
        channel: response.channel.id,
        blocks: await this.builderService.getSubscribeInfoBlock(userId),
      });
    }
  }
}
