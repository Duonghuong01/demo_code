import { Model } from 'mongoose';
import { FeeUser, FeeUserDocument } from 'src/fee-user/schemas/fee-user.schemas';
import { UserDocument } from 'src/user/schemas/user.schemas';
import { Fee, FeeDocument } from './schemas/fee.schemas';
export declare class FeeService {
    private feeModel;
    private feeUserModel;
    private userModel;
    constructor(feeModel: Model<FeeDocument>, feeUserModel: Model<FeeUserDocument>, userModel: Model<UserDocument>);
    findAll(): Promise<(Fee & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    findById(id: any): Promise<(FeeUser & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    create(body: any): Promise<Fee & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    remove(id: string): Promise<Fee & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    pushFeeUser(feeId: string, feeUser: any): Promise<void>;
}
