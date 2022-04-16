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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCountDownSchema = exports.ProductCountDown = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose = require("mongoose");
const product_schemas_1 = require("../../product/schemas/product.schemas");
const countdown_schemas_1 = require("src/countdown/schemas/countdown.schemas");
let ProductCountDown = class ProductCountDown {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", mongoose.Schema.Types.ObjectId)
], ProductCountDown.prototype, "id", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ProductCountDown.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose.Schema.Types.ObjectId, ref: 'CountDown' }),
    __metadata("design:type", typeof (_a = typeof countdown_schemas_1.CountDown !== "undefined" && countdown_schemas_1.CountDown) === "function" ? _a : Object)
], ProductCountDown.prototype, "countdown", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] }),
    __metadata("design:type", Array)
], ProductCountDown.prototype, "votes", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }),
    __metadata("design:type", product_schemas_1.Product)
], ProductCountDown.prototype, "product", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], ProductCountDown.prototype, "createdAt", void 0);
ProductCountDown = __decorate([
    (0, mongoose_1.Schema)()
], ProductCountDown);
exports.ProductCountDown = ProductCountDown;
exports.ProductCountDownSchema = mongoose_1.SchemaFactory.createForClass(ProductCountDown);
//# sourceMappingURL=productcountdown.schemas.js.map