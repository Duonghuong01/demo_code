import { OrderService } from './order.service';
export declare class OrderController {
    private orderService;
    constructor(orderService: OrderService);
    findAll(): Promise<(import("./schemas/order.schemas").Order & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    getOrderByAmount(year: any): Promise<any[]>;
    getOrderByRevenue(year: any): Promise<any[]>;
    searchOrder(body: any): Promise<(import("./schemas/order.schemas").Order & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    findByUser(req: any): Promise<(import("./schemas/order.schemas").Order & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    create(body: any, req: any): Promise<import("./schemas/order.schemas").Order & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    edit(orderId: any, body: any): Promise<import("./schemas/order.schemas").Order & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    delete(orderId: any): Promise<import("./schemas/order.schemas").Order & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
}
