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
exports.TagService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const tag_schemas_1 = require("./schemas/tag.schemas");
let TagService = class TagService {
    constructor(tagModel) {
        this.tagModel = tagModel;
    }
    async findByCategory(categoryId) {
        return this.tagModel.find({ category: categoryId }).populate("category", "title", "Category");
    }
    async create(categoryId, title) {
        let tag = new this.tagModel({ title, category: categoryId });
        return tag.save();
    }
    async edit(tagId, categoryId, title) {
        let tag = await this.tagModel.findById(tagId);
        tag.category = categoryId;
        tag.title = title;
        return tag.save();
    }
    async delete(tagId) {
        let tag = await this.tagModel.findById(tagId);
        return tag.remove();
    }
};
TagService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(tag_schemas_1.Tag.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], TagService);
exports.TagService = TagService;
//# sourceMappingURL=tag.service.js.map