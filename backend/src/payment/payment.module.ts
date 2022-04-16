import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PaymentUser, PaymentUserSchema } from 'src/payment-user/schemas/payment-user.schemas';
import { User, UserSchema } from 'src/user/schemas/user.schemas';
import { PaymentController } from './payment.controller';
import { PaymentService } from './payment.service';
import { Payment, PaymentSchema } from './schemas/payment.schemas';

@Module({
  imports: [MongooseModule.forFeature([{ name: Payment.name, schema: PaymentSchema }]),
  MongooseModule.forFeature([{ name: PaymentUser.name, schema: PaymentUserSchema }]),
  MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])
  ],
  controllers: [PaymentController],
  providers: [PaymentService]
})
export class PaymentModule { }
