import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Attendance } from 'src/attendance/schemas/attendance.schemas';
import { User } from 'src/user/schemas/user.schemas';
import { Payment } from 'src/payment/schemas/payment.schemas';

export type PaymentUserDocument = PaymentUser & Document;

@Schema()
export class PaymentUser {
  @Prop()
  id: mongoose.Schema.Types.ObjectId;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Payment' })
  payment: Payment;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;
  
  @Prop({ default: 'Chưa nộp' })
  status: string;
}

export const PaymentUserSchema = SchemaFactory.createForClass(PaymentUser);