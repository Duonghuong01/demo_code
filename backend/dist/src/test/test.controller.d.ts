import { TestService } from './test.service';
export declare class TestController {
    private testService;
    constructor(testService: TestService);
    findByCategory(): Promise<(import("./schemas/test.schemas").Test & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    create(body: any): Promise<import("./schemas/test.schemas").Test & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    edit(tagId: any, body: any): Promise<import("./schemas/test.schemas").Test & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    remove(tagId: any): Promise<import("./schemas/test.schemas").Test & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
}
