import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Order } from 'src/order/schemas/order.schemas';
import { Product } from 'src/product/schemas/product.schemas';
export declare type OrderProductDocument = OrderProduct & Document;
export declare class OrderProduct {
    id: mongoose.Schema.Types.ObjectId;
    product: Product;
    order: Order;
    amount: Number;
    price: Number;
}
export declare const OrderProductSchema: mongoose.Schema<mongoose.Document<OrderProduct, any, any>, mongoose.Model<mongoose.Document<OrderProduct, any, any>, any, any, any>, any, any>;
