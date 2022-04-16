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
exports.CountdownController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../auth/guard/jwt-auth.guard");
const countdown_service_1 = require("./countdown.service");
let CountdownController = class CountdownController {
    constructor(countdownService) {
        this.countdownService = countdownService;
    }
    async getCountdowns() {
        return this.countdownService.findAll();
    }
    async getCountdownsByDate() {
        return this.countdownService.findByDate();
    }
    async getDetail(id) {
        return this.countdownService.findById(id);
    }
    async createCountdown(body) {
        return this.countdownService.createCountdown(body.title, body.startDate, body.endDate, body.products);
    }
    async updateCountdown(id, body) {
        return this.countdownService.updateCountdown(body.title, body.startDate, body.endDate, body.products, id);
    }
    async removeCountdown(id) {
        return this.countdownService.removeCountdown(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CountdownController.prototype, "getCountdowns", null);
__decorate([
    (0, common_1.Get)('byDate'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CountdownController.prototype, "getCountdownsByDate", null);
__decorate([
    (0, common_1.Get)('detail/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CountdownController.prototype, "getDetail", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CountdownController.prototype, "createCountdown", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('edit/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CountdownController.prototype, "updateCountdown", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)('delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CountdownController.prototype, "removeCountdown", null);
CountdownController = __decorate([
    (0, common_1.Controller)('countdown'),
    __metadata("design:paramtypes", [countdown_service_1.CountdownService])
], CountdownController);
exports.CountdownController = CountdownController;
//# sourceMappingURL=countdown.controller.js.map