import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PaymentUserController } from './payment-user.controller';
import { PaymentUserService } from './payment-user.service';
import { PaymentUser, PaymentUserSchema } from './schemas/payment-user.schemas';

@Module({
  imports: [MongooseModule.forFeature([{ name: PaymentUser.name, schema: PaymentUserSchema }])],
  controllers: [PaymentUserController],
  providers: [PaymentUserService]
})
export class PaymentUserModule {}
