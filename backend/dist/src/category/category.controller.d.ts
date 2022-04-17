import { CategoryService } from './category.service';
export declare class CategoryController {
    private categoryService;
    constructor(categoryService: CategoryService);
    getCategory(): Promise<(import("./schemas/category.schemas").Category & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    addCategory(body: any): Promise<import("./schemas/category.schemas").Category & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    editCategory(categoryId: any, body: any): Promise<import("./schemas/category.schemas").Category & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    deleteCategory(categoryId: any): Promise<import("./schemas/category.schemas").Category & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
}
