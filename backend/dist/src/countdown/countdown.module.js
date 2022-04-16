"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountdownModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const product_schemas_1 = require("../product/schemas/product.schemas");
const productcountdown_schemas_1 = require("../productcountdown/schemas/productcountdown.schemas");
const countdown_controller_1 = require("./countdown.controller");
const countdown_service_1 = require("./countdown.service");
const countdown_schemas_1 = require("./schemas/countdown.schemas");
let CountdownModule = class CountdownModule {
};
CountdownModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: countdown_schemas_1.CountDown.name, schema: countdown_schemas_1.CountDownSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: product_schemas_1.Product.name, schema: product_schemas_1.ProductSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: productcountdown_schemas_1.ProductCountDown.name, schema: productcountdown_schemas_1.ProductCountDownSchema }])
        ],
        controllers: [countdown_controller_1.CountdownController],
        providers: [countdown_service_1.CountdownService]
    })
], CountdownModule);
exports.CountdownModule = CountdownModule;
//# sourceMappingURL=countdown.module.js.map