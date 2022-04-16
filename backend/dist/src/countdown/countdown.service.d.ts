import { Model } from 'mongoose';
import { ProductDocument } from 'src/product/schemas/product.schemas';
import { ProductCountDown, ProductCountDownDocument } from 'src/productcountdown/schemas/productcountdown.schemas';
import { CountDown, CountDownDocument } from './schemas/countdown.schemas';
export declare class CountdownService {
    private countdownModel;
    private productCountDownModel;
    private productModel;
    constructor(countdownModel: Model<CountDownDocument>, productCountDownModel: Model<ProductCountDownDocument>, productModel: Model<ProductDocument>);
    findAll(): Promise<CountDown[]>;
    findByDate(): Promise<(CountDown & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    findById(id: any): Promise<{
        total: number;
        countdown: CountDown & import("mongoose").Document<any, any, any> & {
            _id: any;
        };
        products: (ProductCountDown & import("mongoose").Document<any, any, any> & {
            _id: any;
        })[];
    }>;
    createCountdown(title: any, startDate: any, endDate: any, products: any): Promise<CountDown>;
    updateCountdown(title: any, startDate: any, endDate: any, products: any, id: any): Promise<CountDown>;
    removeCountdown(id: any): Promise<CountDown>;
    sortCountdown(id: any): Promise<void>;
}
