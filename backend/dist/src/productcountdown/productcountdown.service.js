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
exports.ProductcountdownService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const countdown_schemas_1 = require("src/countdown/schemas/countdown.schemas");
const vote_user_schemas_1 = require("../vote-user/schemas/vote-user.schemas");
const productcountdown_schemas_1 = require("./schemas/productcountdown.schemas");
let ProductcountdownService = class ProductcountdownService {
    constructor(productcountdownModel, countdownModel, voteUserModel) {
        this.productcountdownModel = productcountdownModel;
        this.countdownModel = countdownModel;
        this.voteUserModel = voteUserModel;
    }
    async findAll() {
        return this.productcountdownModel.find({});
    }
    async createProductCountdown(countdown, user, product) {
        let countdownDb = await this.countdownModel.findById(countdown);
        if (countdownDb.votes.includes(user)) {
            throw new common_1.HttpException('Error', 201);
        }
        else {
            countdownDb.votes.push(user);
            countdownDb.save();
            const productcountdown = await this.productcountdownModel.findOne({ countdown, product });
            if (productcountdown) {
                productcountdown.votes.push(user);
                let voteUser = new this.voteUserModel({
                    createdAt: new Date(),
                    user: user,
                    productCountDown: productcountdown._id
                });
                voteUser.save();
                return productcountdown.save();
            }
        }
    }
    async checkUserVoted(countdownId, userId) {
        let countdown = await this.countdownModel.findById(countdownId);
        if (countdown.votes.includes(userId)) {
            return true;
        }
        else {
            return false;
        }
    }
};
ProductcountdownService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(productcountdown_schemas_1.ProductCountDown.name)),
    __param(1, (0, mongoose_1.InjectModel)(countdown_schemas_1.CountDown.name)),
    __param(2, (0, mongoose_1.InjectModel)(vote_user_schemas_1.VoteUser.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], ProductcountdownService);
exports.ProductcountdownService = ProductcountdownService;
//# sourceMappingURL=productcountdown.service.js.map