/// <reference types="mongoose" />
import { FeeService } from './fee.service';
export declare class FeeController {
    private feeService;
    constructor(feeService: FeeService);
    findAll(): Promise<(import("./schemas/fee.schemas").Fee & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    find(feeId: string): Promise<(import("../fee-user/schemas/fee-user.schemas").FeeUser & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    create(body: any): Promise<import("./schemas/fee.schemas").Fee & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    remove(feeId: string): Promise<import("./schemas/fee.schemas").Fee & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
}
