import { Model } from 'mongoose';
import { Category, CategoryDocument } from './schemas/category.schemas';
export declare class CategoryService {
    private categoryModel;
    constructor(categoryModel: Model<CategoryDocument>);
    findAll(): Promise<(Category & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    create(title: string): Promise<Category & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    update(categoryId: any, title: string): Promise<Category & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    delete(categoryId: any): Promise<Category & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
}
