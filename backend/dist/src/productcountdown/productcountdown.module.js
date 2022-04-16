"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductcountdownModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const countdown_schemas_1 = require("src/countdown/schemas/countdown.schemas");
const vote_user_schemas_1 = require("../vote-user/schemas/vote-user.schemas");
const productcountdown_controller_1 = require("./productcountdown.controller");
const productcountdown_service_1 = require("./productcountdown.service");
const productcountdown_schemas_1 = require("./schemas/productcountdown.schemas");
let ProductcountdownModule = class ProductcountdownModule {
};
ProductcountdownModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: productcountdown_schemas_1.ProductCountDown.name, schema: productcountdown_schemas_1.ProductCountDownSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: countdown_schemas_1.CountDown.name, schema: countdown_schemas_1.CountDownSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: vote_user_schemas_1.VoteUser.name, schema: vote_user_schemas_1.VoteUserSchema }])
        ],
        controllers: [productcountdown_controller_1.ProductcountdownController],
        providers: [productcountdown_service_1.ProductcountdownService]
    })
], ProductcountdownModule);
exports.ProductcountdownModule = ProductcountdownModule;
//# sourceMappingURL=productcountdown.module.js.map