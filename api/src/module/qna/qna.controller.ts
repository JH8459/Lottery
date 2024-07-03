import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { QnaService } from './qna.service';
import { QNA_SWAGGER } from './swagger/qna.swagger';
import { QnaRegistInfoDto } from './dto/qna.dto';
import { ResponseDto } from 'src/common/dto/response.dto';

@ApiTags('QNA API')
@Controller('/qna')
export class QnaController {
  constructor(private qnaService: QnaService) {}

  @ApiOperation(QNA_SWAGGER.POST.API_OPERATION)
  @ApiBody(QNA_SWAGGER.POST.API_BODY)
  @Post('/')
  async requestQuestion(@Body() qnaRegistInfo: QnaRegistInfoDto): Promise<ResponseDto> {
    await this.qnaService.requestQuestion(qnaRegistInfo);

    const result: ResponseDto = {
      message: '문의하기 성공',
    };

    return result;
  }
}
