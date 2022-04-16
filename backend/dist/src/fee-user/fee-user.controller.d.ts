/// <reference types="multer" />
/// <reference types="mongoose" />
import { FeeUserService } from './fee-user.service';
export declare class FeeUserController {
    private feeUserService;
    constructor(feeUserService: FeeUserService);
    findAll(): Promise<(import("./schemas/fee-user.schemas").FeeUser & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    create(body: any, req: any): Promise<import("./schemas/fee-user.schemas").FeeUser & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    update(feeUserId: string): Promise<import("./schemas/fee-user.schemas").FeeUser & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    checkstatus(body: any, req: any): Promise<string>;
    updateUser(file: Express.Multer.File, body: any, req: any): Promise<import("./schemas/fee-user.schemas").FeeUser & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
}
