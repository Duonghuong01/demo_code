import { Model } from 'mongoose';
import { CategoryDocument } from 'src/category/schemas/category.schemas';
import { Product, ProductDocument } from './schemas/product.schemas';
export declare class ProductService {
    private productModel;
    private categoryModel;
    constructor(productModel: Model<ProductDocument>, categoryModel: Model<CategoryDocument>);
    findByCategory(categoryId: any): Promise<(Product & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    findById(productId: any): Promise<Product & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    findByTag(tagId: any): Promise<(Product & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    findByCreateDate(): Promise<(Product & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    create(productDto: any, photoURL: string): Promise<Product & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    edit(productId: any, productDto: any, photoURL?: string): Promise<Product & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    delete(productId: any): Promise<Product & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
}
