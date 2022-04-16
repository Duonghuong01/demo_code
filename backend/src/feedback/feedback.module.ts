import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/user/schemas/user.schemas';
import { FeedbackController } from './feedback.controller';
import { FeedbackService } from './feedback.service';
import { Feedback, FeedbackSchema } from './schemas/feedback.schemas';

@Module({
  imports: [MongooseModule.forFeature([{ name: Feedback.name, schema: FeedbackSchema }]),
  MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])
  ],
  controllers: [FeedbackController],
  providers: [FeedbackService]
})
export class FeedbackModule { }
