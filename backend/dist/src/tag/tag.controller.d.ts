import { TagService } from './tag.service';
export declare class TagController {
    private tagService;
    constructor(tagService: TagService);
    findByCategory(categoryId: any): Promise<(import("./schemas/tag.schemas").Tag & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    create(body: any): Promise<import("./schemas/tag.schemas").Tag & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    edit(tagId: any, body: any): Promise<import("./schemas/tag.schemas").Tag & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    remove(tagId: any): Promise<import("./schemas/tag.schemas").Tag & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
}
