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
exports.OrderSchema = exports.Order = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose = require("mongoose");
const user_schemas_1 = require("../../user/schemas/user.schemas");
let Order = class Order {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", mongoose.Schema.Types.ObjectId)
], Order.prototype, "id", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: {
            fullName: { type: String }, phoneNumber: { type: String },
            email: { type: String },
            city: { type: String },
            district: { type: String },
            address: { type: String },
        }
    }),
    __metadata("design:type", Object)
], Order.prototype, "peopleSend", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: {
            fullName: { type: String }, phoneNumber: { type: String },
            city: { type: String },
            email: { type: String },
            district: { type: String },
            address: { type: String },
        }
    }),
    __metadata("design:type", Object)
], Order.prototype, "peopleRecieve", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose.Schema.Types.ObjectId }),
    __metadata("design:type", user_schemas_1.User)
], Order.prototype, "createdBy", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Order.prototype, "code", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'OrderProduct' }] }),
    __metadata("design:type", Array)
], Order.prototype, "orderProducts", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: {
            year: { type: String }, month: { type: String },
            day: { type: String },
            hour: { type: String }
        }
    }),
    __metadata("design:type", Object)
], Order.prototype, "time", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: {
            titleSend: { type: String }, occasion: { type: String },
            noteSendToPersonReceive: { type: String },
            noteSendToPersonAdmin: { type: String }
        }
    }),
    __metadata("design:type", Object)
], Order.prototype, "message", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Order.prototype, "totalPrice", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: "Pending" }),
    __metadata("design:type", String)
], Order.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: new Date() }),
    __metadata("design:type", Date)
], Order.prototype, "createdAt", void 0);
Order = __decorate([
    (0, mongoose_1.Schema)()
], Order);
exports.Order = Order;
exports.OrderSchema = mongoose_1.SchemaFactory.createForClass(Order);
//# sourceMappingURL=order.schemas.js.map