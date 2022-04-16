import { Model } from 'mongoose';
import { Tag, TagDocument } from './schemas/tag.schemas';
export declare class TagService {
    private tagModel;
    constructor(tagModel: Model<TagDocument>);
    findByCategory(categoryId: any): Promise<(Tag & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    create(categoryId: any, title: any): Promise<Tag & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    edit(tagId: any, categoryId: any, title: any): Promise<Tag & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    delete(tagId: any): Promise<Tag & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
}
