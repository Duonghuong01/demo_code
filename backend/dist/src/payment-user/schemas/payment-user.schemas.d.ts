import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { User } from 'src/user/schemas/user.schemas';
import { Payment } from 'src/payment/schemas/payment.schemas';
export declare type PaymentUserDocument = PaymentUser & Document;
export declare class PaymentUser {
    id: mongoose.Schema.Types.ObjectId;
    payment: Payment;
    user: User;
    status: string;
}
export declare const PaymentUserSchema: mongoose.Schema<Document<PaymentUser, any, any>, mongoose.Model<Document<PaymentUser, any, any>, any, any, any>, any, any>;
