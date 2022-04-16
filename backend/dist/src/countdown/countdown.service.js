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
exports.CountdownService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const product_schemas_1 = require("../product/schemas/product.schemas");
const productcountdown_schemas_1 = require("../productcountdown/schemas/productcountdown.schemas");
const countdown_schemas_1 = require("./schemas/countdown.schemas");
let CountdownService = class CountdownService {
    constructor(countdownModel, productCountDownModel, productModel) {
        this.countdownModel = countdownModel;
        this.productCountDownModel = productCountDownModel;
        this.productModel = productModel;
    }
    async findAll() {
        return this.countdownModel.find({}).populate("products", "title", "Product").populate("total", "votes", "ProductCountDown");
    }
    async findByDate() {
        let date = new Date();
        return this.countdownModel.find({
            "startDate": {
                "$lt": date
            },
            "endDate": {
                "$gte": date
            }
        }).populate("products", "title", "Product").populate("total", "votes", "ProductCountDown");
    }
    async findById(id) {
        let countdown = await this.countdownModel.findById(id.toString());
        let productcountdowns = await this.productCountDownModel.find({ countdown: countdown._id }).populate("product", "title author photoURL", "Product");
        let total = 0;
        productcountdowns.forEach(item => {
            total += item.votes.length;
        });
        let sortProducts = productcountdowns.sort((a, b) => b.votes.length - a.votes.length);
        return {
            total,
            countdown,
            products: sortProducts
        };
    }
    async createCountdown(title, startDate, endDate, products) {
        let date = new Date();
        const countdown = new this.countdownModel({ title, startDate, endDate, products, createdAt: date });
        products.forEach(item => {
            let productcountdown = new this.productCountDownModel({
                countdown: countdown._id,
                product: item,
                title: countdown.title,
                votes: []
            });
            productcountdown.save();
            countdown.total.push(productcountdown._id);
        });
        return countdown.save();
    }
    async updateCountdown(title, startDate, endDate, products, id) {
        let countdown = await this.countdownModel.findById(id.toString());
        countdown.title = title;
        countdown.startDate = startDate;
        countdown.endDate = endDate;
        countdown.products = products;
        return countdown.save();
    }
    async removeCountdown(id) {
        let countdown = await this.countdownModel.findById(id.toString());
        return countdown.remove();
    }
    async sortCountdown(id) {
        let countdown = await this.countdownModel.findById(id);
    }
};
CountdownService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(countdown_schemas_1.CountDown.name)),
    __param(1, (0, mongoose_1.InjectModel)(productcountdown_schemas_1.ProductCountDown.name)),
    __param(2, (0, mongoose_1.InjectModel)(product_schemas_1.Product.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], CountdownService);
exports.CountdownService = CountdownService;
//# sourceMappingURL=countdown.service.js.map