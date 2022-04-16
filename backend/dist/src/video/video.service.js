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
exports.VideoService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const video_schemas_1 = require("./schemas/video.schemas");
let VideoService = class VideoService {
    constructor(videoModel) {
        this.videoModel = videoModel;
    }
    async loadMore(videoId) {
        return this.videoModel.find({ '_id': { $ne: videoId } });
    }
    async findAll(skipNumber) {
        return this.videoModel.find({}).populate("category", "title", "Category").sort({ createdAt: -1 }).skip(skipNumber).limit(6).exec().then(data => {
            return this.videoModel.countDocuments().exec().then(count => {
                return {
                    totalPage: count,
                    data
                };
            });
        });
    }
    async search(textSearch) {
        let regex = new RegExp(textSearch, "i");
        return await this.videoModel.find({ title: regex });
    }
    async createVideo(createVideoDto, category, photoURL, username) {
        const video = new this.videoModel(Object.assign(Object.assign({}, createVideoDto), { category: category, photoURL, createdBy: username }));
        return video.save();
    }
    async findById(id) {
        return await this.videoModel.findById(id);
    }
    async deleteById(id) {
        let video = await this.videoModel.findById(id);
        if (video) {
            video.remove();
        }
    }
    async updateById(id, updateVideoDto, category, photoURL) {
        let video = await this.videoModel.findById(id.toString());
        if (photoURL) {
            video.title = updateVideoDto.title;
            video.metaDescription = updateVideoDto.metaDescription;
            video.content = updateVideoDto.content;
            video.videoUrl = updateVideoDto.videoUrl;
            video.category = category;
            video.photoURL = photoURL;
            return video.save();
        }
        else {
            video.title = updateVideoDto.title;
            video.metaDescription = updateVideoDto.metaDescription;
            video.content = updateVideoDto.content;
            video.category = category;
            video.videoUrl = updateVideoDto.videoUrl;
            return video.save();
        }
    }
};
VideoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(video_schemas_1.Video.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], VideoService);
exports.VideoService = VideoService;
//# sourceMappingURL=video.service.js.map