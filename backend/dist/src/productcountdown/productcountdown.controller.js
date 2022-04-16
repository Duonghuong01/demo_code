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
exports.ProductcountdownController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../auth/guard/jwt-auth.guard");
const productcountdown_service_1 = require("./productcountdown.service");
let ProductcountdownController = class ProductcountdownController {
    constructor(productcountdownService) {
        this.productcountdownService = productcountdownService;
    }
    async getProductCountdowns() {
        return this.productcountdownService.findAll();
    }
    async createCountdown(body, req) {
        return this.productcountdownService.createProductCountdown(body.countdown, req.user._doc._id, body.product);
    }
    async checkUserVoted(body, req) {
        return this.productcountdownService.checkUserVoted(body.countdown, req.user._doc._id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductcountdownController.prototype, "getProductCountdowns", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProductcountdownController.prototype, "createCountdown", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('voted/user'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProductcountdownController.prototype, "checkUserVoted", null);
ProductcountdownController = __decorate([
    (0, common_1.Controller)('productcountdown'),
    __metadata("design:paramtypes", [productcountdown_service_1.ProductcountdownService])
], ProductcountdownController);
exports.ProductcountdownController = ProductcountdownController;
//# sourceMappingURL=productcountdown.controller.js.map