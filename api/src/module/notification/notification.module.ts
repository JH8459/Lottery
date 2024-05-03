import { Module } from '@nestjs/common';
import { EmailModule } from './email/email.module';
import { EmailService } from './email/email.service';
import { BoltService } from './slack/bolt.service';

@Module({
  imports: [EmailModule],
  providers: [EmailService, BoltService],
  exports: [EmailService, BoltService],
})
export class NotificationsModule {}
