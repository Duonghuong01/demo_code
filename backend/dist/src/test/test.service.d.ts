import { Model } from 'mongoose';
import { TestDocument } from './schemas/test.schemas';
export declare class TestService {
    private testModel;
    constructor(testModel: Model<TestDocument>);
    find(): Promise<(import("./schemas/test.schemas").Test & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    create(title: any, content: any): Promise<import("./schemas/test.schemas").Test & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    edit(testId: any, title: any, content: any): Promise<import("./schemas/test.schemas").Test & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    delete(tagId: any): Promise<import("./schemas/test.schemas").Test & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
}
