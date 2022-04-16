/// <reference types="multer" />
import { ProductDto } from './dto/product.dto';
import { ProductService } from './product.service';
export declare class ProductController {
    private productService;
    constructor(productService: ProductService);
    getProduct(categoryId: any): Promise<(import("./schemas/product.schemas").Product & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    getProductById(productId: any): Promise<import("./schemas/product.schemas").Product & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    getProductByTag(tagId: any): Promise<(import("./schemas/product.schemas").Product & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    getProductByDate(): Promise<(import("./schemas/product.schemas").Product & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    uploadFile(file: Express.Multer.File, body: ProductDto): Promise<import("./schemas/product.schemas").Product & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    updateBlog(file: Express.Multer.File, body: any, id: any): Promise<import("./schemas/product.schemas").Product & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    removeBlog(id: any): Promise<import("./schemas/product.schemas").Product & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
}
