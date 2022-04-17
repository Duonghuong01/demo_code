import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { BlogModule } from './blog/blog.module';
import { CategoryModule } from './category/category.module';
import { CommentModule } from './comment/comment.module';
import { FeedbackModule } from './feedback/feedback.module';
import { PaymentModule } from './payment/payment.module';
import { UserModule } from './user/user.module';
import { VideoModule } from './video/video.module';
import { AttendanceModule } from './attendance/attendance.module';
import { AttendanceUserModule } from './attendance-user/attendance-user.module';
import { PaymentUserModule } from './payment-user/payment-user.module';


@Module({
  imports: [UserModule,
    MongooseModule.forRoot('mongodb://localhost/congngheweb'),
    AuthModule,
    BlogModule,
    CommentModule,
    FeedbackModule,
    CategoryModule,
    PaymentModule,
    VideoModule,
    AttendanceModule,
    AttendanceUserModule,
    PaymentUserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
