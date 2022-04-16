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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentUserSchema = exports.PaymentUser = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose = require("mongoose");
const user_schemas_1 = require("../../user/schemas/user.schemas");
const payment_schemas_1 = require("../../payment/schemas/payment.schemas");
let PaymentUser = class PaymentUser {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", mongoose.Schema.Types.ObjectId)
], PaymentUser.prototype, "id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose.Schema.Types.ObjectId, ref: 'Payment' }),
    __metadata("design:type", payment_schemas_1.Payment)
], PaymentUser.prototype, "payment", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose.Schema.Types.ObjectId, ref: 'User' }),
    __metadata("design:type", user_schemas_1.User)
], PaymentUser.prototype, "user", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 'Chưa nộp' }),
    __metadata("design:type", String)
], PaymentUser.prototype, "status", void 0);
PaymentUser = __decorate([
    (0, mongoose_1.Schema)()
], PaymentUser);
exports.PaymentUser = PaymentUser;
exports.PaymentUserSchema = mongoose_1.SchemaFactory.createForClass(PaymentUser);
//# sourceMappingURL=payment-user.schemas.js.map