"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentUserModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const payment_user_controller_1 = require("./payment-user.controller");
const payment_user_service_1 = require("./payment-user.service");
const payment_user_schemas_1 = require("./schemas/payment-user.schemas");
let PaymentUserModule = class PaymentUserModule {
};
PaymentUserModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: payment_user_schemas_1.PaymentUser.name, schema: payment_user_schemas_1.PaymentUserSchema }])],
        controllers: [payment_user_controller_1.PaymentUserController],
        providers: [payment_user_service_1.PaymentUserService]
    })
], PaymentUserModule);
exports.PaymentUserModule = PaymentUserModule;
//# sourceMappingURL=payment-user.module.js.map