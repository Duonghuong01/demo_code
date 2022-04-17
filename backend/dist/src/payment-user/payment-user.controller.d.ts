import { PaymentUserService } from './payment-user.service';
export declare class PaymentUserController {
    private paymentUserService;
    constructor(paymentUserService: PaymentUserService);
    findPaymentByUser(req: any): Promise<(import("./schemas/payment-user.schemas").PaymentUser & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    paymentUserStatusByUser(paymentUserId: any): Promise<import("./schemas/payment-user.schemas").PaymentUser & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    getPayment(body: any, req: any, res: any): Promise<any>;
    changePaymentUserStatusByAdmin(body: any): Promise<import("./schemas/payment-user.schemas").PaymentUser & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
}
