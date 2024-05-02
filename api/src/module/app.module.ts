import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MailerModule } from '@nestjs-modules/mailer';
import { RedisModule } from '@nestjs-modules/ioredis';
import { WinstonModule } from 'nest-winston';
import { LoggerMiddleware } from 'src/common/middleware/logger.middleware';
import { HealthModule } from './health/health.module';
import { NotificationsModule } from './notification/notification.module';
import { WINSTON_CONFIG } from 'src/config/logger.config';
import { EMAIL_CONFIG } from 'src/config/email.config';
import { REDIS_CONFIG } from 'src/config/redis.config';
import { SchedulerModule } from './scheduler/scheduler.module';
import * as NestJSSlack from 'nestjs-slack';
import { SLACK_CONFIG } from 'src/config/slack.config';
import { SlackModule } from './slack/slack.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MailerModule.forRootAsync(EMAIL_CONFIG),
    RedisModule.forRootAsync(REDIS_CONFIG),
    NestJSSlack.SlackModule.forRootAsync(SLACK_CONFIG),
    WinstonModule.forRoot(WINSTON_CONFIG),
    HealthModule,
    NotificationsModule,
    SchedulerModule,
    SlackModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
