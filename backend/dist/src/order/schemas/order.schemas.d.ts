import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { User } from 'src/user/schemas/user.schemas';
import { OrderProduct } from 'src/order-product/schemas/order-product.schemas';
export declare type OrderDocument = Order & Document;
export declare class Order {
    id: mongoose.Schema.Types.ObjectId;
    peopleSend: {
        fullName: String;
        phoneNumber: String;
        city: String;
        district: String;
        address: String;
        email: string;
    };
    peopleRecieve: {
        fullName: String;
        phoneNumber: String;
        city: String;
        district: String;
        email: String;
        address: String;
    };
    createdBy: User;
    code: String;
    orderProducts: OrderProduct[];
    time: {
        year: String;
        month: String;
        day: String;
        hour: String;
    };
    message: {
        titleSend: String;
        occasion: String;
        noteSendToPersonReceive: String;
        noteSendToPersonAdmin: String;
    };
    totalPrice: Number;
    status: String;
    createdAt: Date;
}
export declare const OrderSchema: mongoose.Schema<Document<Order, any, any>, mongoose.Model<Document<Order, any, any>, any, any, any>, any, any>;
