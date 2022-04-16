import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
export declare type PaymentDocument = Payment & Document;
export declare class Payment {
    id: mongoose.Schema.Types.ObjectId;
    title: string;
    fee: string;
    createdAt: Date;
}
export declare const PaymentSchema: mongoose.Schema<Document<Payment, any, any>, mongoose.Model<Document<Payment, any, any>, any, any, any>, any, any>;
