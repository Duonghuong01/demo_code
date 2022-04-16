"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const category_schemas_1 = require("../category/schemas/category.schemas");
const product_schemas_1 = require("./schemas/product.schemas");
var mongoose = require('mongoose');
let ProductService = class ProductService {
    constructor(productModel, categoryModel) {
        this.productModel = productModel;
        this.categoryModel = categoryModel;
    }
    async findByCategory(categoryId) {
        return this.productModel.find({ category: categoryId }).populate("category", "title", "Category").populate("tag", "title", "Tag").limit(10);
    }
    async findById(productId) {
        return this.productModel.findById(productId);
    }
    async findByTag(tagId) {
        return this.productModel.find({ tag: tagId }).populate("category", "title", "Category").populate("tag", "title", "Tag");
    }
    async findByCreateDate() {
        return this.productModel.find().sort({ createdAt: -1 }).limit(6).populate("tag", "title", "Tag").populate("category", "title", "Category");
    }
    async create(productDto, photoURL) {
        let product = new this.productModel();
        product.title = productDto.title;
        product.tag = productDto.tag;
        product.category = productDto.category;
        product.price = productDto.price;
        product.content = productDto.content;
        product.warn = productDto.warn;
        product.animate = productDto.animate;
        product.photoURL = photoURL;
        return product.save();
    }
    async edit(productId, productDto, photoURL) {
        let product = await this.productModel.findById(productId);
        if (photoURL) {
            product.title = productDto.title;
            product.category = productDto.category;
            product.tag = productDto.tag;
            product.price = productDto.price;
            product.content = productDto.content;
            product.warn = productDto.warn;
            product.animate = productDto.animate;
            product.photoURL = photoURL;
        }
        else {
            product.tag = productDto.tag;
            product.title = productDto.title;
            product.category = productDto.category;
            product.price = productDto.price;
            product.content = productDto.content;
            product.warn = productDto.warn;
            product.animate = productDto.animate;
        }
        return product.save();
    }
    async delete(productId) {
        let product = await this.productModel.findById(productId);
        return product.remove();
    }
};
ProductService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(product_schemas_1.Product.name)),
    __param(1, (0, mongoose_1.InjectModel)(category_schemas_1.Category.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map