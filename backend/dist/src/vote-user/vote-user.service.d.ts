import { Model } from 'mongoose';
import { ProductCountDownDocument } from 'src/productcountdown/schemas/productcountdown.schemas';
import { VoteUser, VoteUserDocument } from './schemas/vote-user.schemas';
export declare class VoteUserService {
    private voteUserModel;
    private productCountdownModel;
    constructor(voteUserModel: Model<VoteUserDocument>, productCountdownModel: Model<ProductCountDownDocument>);
    findAll(): Promise<(VoteUser & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    findById(userId: any): Promise<(VoteUser & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
}
