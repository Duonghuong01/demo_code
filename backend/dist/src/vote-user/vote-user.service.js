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
exports.VoteUserService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const productcountdown_schemas_1 = require("src/productcountdown/schemas/productcountdown.schemas");
const vote_user_schemas_1 = require("./schemas/vote-user.schemas");
let VoteUserService = class VoteUserService {
    constructor(voteUserModel, productCountdownModel) {
        this.voteUserModel = voteUserModel;
        this.productCountdownModel = productCountdownModel;
    }
    async findAll() {
        let data = await this.voteUserModel.aggregate([
            {
                $group: {
                    _id: "$user",
                    totalVote: { $sum: 1 },
                },
            }
        ]);
        let resp = data.sort((a, b) => b.totalVote - a.totalVote);
        return this.voteUserModel.populate(resp, { path: '_id', select: 'fullName photoURL', model: 'User' });
    }
    async findById(userId) {
        let voteUsers = await this.voteUserModel.find({ user: userId }).populate({
            path: "productCountDown",
            select: "product countdown title",
            model: "ProductCountDown",
            populate: {
                path: "product",
                select: "title author",
                model: "Product"
            },
        });
        return voteUsers;
    }
};
VoteUserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(vote_user_schemas_1.VoteUser.name)),
    __param(1, (0, mongoose_1.InjectModel)(productcountdown_schemas_1.ProductCountDown.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], VoteUserService);
exports.VoteUserService = VoteUserService;
//# sourceMappingURL=vote-user.service.js.map