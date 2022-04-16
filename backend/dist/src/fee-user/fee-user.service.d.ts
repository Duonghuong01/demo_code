import { Model } from 'mongoose';
import { FeeService } from 'src/fee/fee.service';
import { FeeDocument } from 'src/fee/schemas/fee.schemas';
import { UserDocument } from 'src/user/schemas/user.schemas';
import { FeeUser, FeeUserDocument } from './schemas/fee-user.schemas';
export declare class FeeUserService {
    private feeUserModel;
    private feeModel;
    private userModel;
    private feeService;
    constructor(feeUserModel: Model<FeeUserDocument>, feeModel: Model<FeeDocument>, userModel: Model<UserDocument>, feeService: FeeService);
    findAll(): Promise<(FeeUser & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    create(feeStr: string, userId: any): Promise<FeeUser & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    remove(id: string): Promise<FeeUser & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    update(id: string): Promise<FeeUser & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    checkstatus(feeId: any, userId: any): Promise<string>;
    upPhotoURLFee(photoURL: string, feeId: any, userId: any): Promise<FeeUser & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
}
