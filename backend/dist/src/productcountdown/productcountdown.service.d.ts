import { Model } from 'mongoose';
import { CountDownDocument } from 'src/countdown/schemas/countdown.schemas';
import { VoteUserDocument } from 'src/vote-user/schemas/vote-user.schemas';
import { ProductCountDown, ProductCountDownDocument } from './schemas/productcountdown.schemas';
export declare class ProductcountdownService {
    private productcountdownModel;
    private countdownModel;
    private voteUserModel;
    constructor(productcountdownModel: Model<ProductCountDownDocument>, countdownModel: Model<CountDownDocument>, voteUserModel: Model<VoteUserDocument>);
    findAll(): Promise<ProductCountDown[]>;
    createProductCountdown(countdown: any, user: any, product: any): Promise<ProductCountDown>;
    checkUserVoted(countdownId: any, userId: any): Promise<boolean>;
}
