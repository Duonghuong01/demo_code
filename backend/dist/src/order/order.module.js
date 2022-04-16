"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const order_product_schemas_1 = require("../order-product/schemas/order-product.schemas");
const order_controller_1 = require("./order.controller");
const order_service_1 = require("./order.service");
const order_schemas_1 = require("./schemas/order.schemas");
let OrderModule = class OrderModule {
};
OrderModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: order_schemas_1.Order.name, schema: order_schemas_1.OrderSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: order_product_schemas_1.OrderProduct.name, schema: order_product_schemas_1.OrderProductSchema }])
        ],
        controllers: [order_controller_1.OrderController],
        providers: [order_service_1.OrderService]
    })
], OrderModule);
exports.OrderModule = OrderModule;
//# sourceMappingURL=order.module.js.map