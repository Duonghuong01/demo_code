"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoteUserModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const countdown_schemas_1 = require("src/countdown/schemas/countdown.schemas");
const product_schemas_1 = require("src/product/schemas/product.schemas");
const productcountdown_schemas_1 = require("src/productcountdown/schemas/productcountdown.schemas");
const vote_user_schemas_1 = require("./schemas/vote-user.schemas");
const vote_user_controller_1 = require("./vote-user.controller");
const vote_user_service_1 = require("./vote-user.service");
let VoteUserModule = class VoteUserModule {
};
VoteUserModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: vote_user_schemas_1.VoteUser.name, schema: vote_user_schemas_1.VoteUserSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: productcountdown_schemas_1.ProductCountDown.name, schema: productcountdown_schemas_1.ProductCountDownSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: countdown_schemas_1.CountDown.name, schema: countdown_schemas_1.CountDownSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: product_schemas_1.Product.name, schema: product_schemas_1.ProductSchema }]),
        ],
        controllers: [vote_user_controller_1.VoteUserController],
        providers: [vote_user_service_1.VoteUserService]
    })
], VoteUserModule);
exports.VoteUserModule = VoteUserModule;
//# sourceMappingURL=vote-user.module.js.map