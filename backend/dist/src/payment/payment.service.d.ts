import { Model } from 'mongoose';
import { PaymentUser, PaymentUserDocument } from 'src/payment-user/schemas/payment-user.schemas';
import { UserDocument } from 'src/user/schemas/user.schemas';
import { Payment, PaymentDocument } from './schemas/payment.schemas';
export declare class PaymentService {
    private paymentModel;
    private userModel;
    private paymentUserModel;
    constructor(paymentModel: Model<PaymentDocument>, userModel: Model<UserDocument>, paymentUserModel: Model<PaymentUserDocument>);
    findAll(): Promise<(Payment & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    findById(paymentId: any, status: any): Promise<(PaymentUser & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    create(paymentDto: any): Promise<Payment & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    edit(paymentId: any, paymentDto: any): Promise<Payment & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    delete(paymentId: any): Promise<Payment & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
}
