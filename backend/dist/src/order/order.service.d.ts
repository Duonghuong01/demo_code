import { Model } from 'mongoose';
import { OrderProductDocument } from 'src/order-product/schemas/order-product.schemas';
import { OrderDto } from './dto/order.dto';
import { Order, OrderDocument } from './schemas/order.schemas';
export declare class OrderService {
    private orderModel;
    private orderProductModel;
    constructor(orderModel: Model<OrderDocument>, orderProductModel: Model<OrderProductDocument>);
    findAll(): Promise<(Order & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    search(textSearch: any): Promise<(Order & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    findOrderByAmount(year: any): Promise<any[]>;
    findOrderByRevenue(year: any): Promise<any[]>;
    findByUser(user: any): Promise<(Order & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    create(orderDto: OrderDto, orderProductDto: any, user: any): Promise<Order & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    editStatus(orderId: any, status: any): Promise<Order & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    delete(orderId: any): Promise<Order & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
}
