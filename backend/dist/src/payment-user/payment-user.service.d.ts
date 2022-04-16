import { Model } from 'mongoose';
import { PaymentUser, PaymentUserDocument } from './schemas/payment-user.schemas';
export declare class PaymentUserService {
    private paymentUserModel;
    constructor(paymentUserModel: Model<PaymentUserDocument>);
    paymentUserStatusByAdmin(paymentUserDto: any): Promise<PaymentUser & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    createPayment(body: any, req: any, res: any): Promise<any>;
    sortObject(obj: any): Promise<{}>;
}
