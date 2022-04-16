import { PaymentService } from './payment.service';
export declare class PaymentController {
    private readonly paymentService;
    constructor(paymentService: PaymentService);
    findAll(): Promise<(import("./schemas/payment.schemas").Payment & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    findById(paymentId: any, status: any): Promise<(import("../payment-user/schemas/payment-user.schemas").PaymentUser & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    create(body: any): Promise<import("./schemas/payment.schemas").Payment & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    edit(paymentId: any, body: any): Promise<import("./schemas/payment.schemas").Payment & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    delete(paymentId: any): Promise<import("./schemas/payment.schemas").Payment & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
}
