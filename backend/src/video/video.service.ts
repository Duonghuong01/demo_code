import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { VideoDto } from './dto/video-dto.dto';
import { Video, VideoDocument } from './schemas/video.schemas';

@Injectable()
export class VideoService {
  constructor(@InjectModel(Video.name) private videoModel: Model<VideoDocument>) { }


  async loadMore(videoId) {
    return this.videoModel.find({ '_id': { $ne: videoId } })
  }

  async findAll(skipNumber) {
    return this.videoModel.find({}).populate("category", "title", "Category").sort({ createdAt: -1 }).skip(skipNumber).limit(6).exec().then(data => {
      return this.videoModel.countDocuments().exec().then(count => {
        return {
          totalPage: count,
          data
        };
      })
    })
  }

  async search(textSearch) {
    let regex = new RegExp(textSearch, "i");
    return await this.videoModel.find({ title: regex });
  }

  async createVideo(createVideoDto: VideoDto, category, photoURL: string, username: string): Promise<Video> {
    const video = new this.videoModel({ ...createVideoDto, category: category, photoURL, createdBy: username })
    return video.save();
  }

  async findById(id: string): Promise<Video> {
    return await this.videoModel.findById(id)
  }

  async deleteById(id: string) {
    let video = await this.videoModel.findById(id);
    if (video) {
      video.remove()
    }
  }

  async updateById(id: string, updateVideoDto: VideoDto, category, photoURL?: string): Promise<Video> {
    let video = await this.videoModel.findById(id.toString())
    if (photoURL) {
      video.title = updateVideoDto.title;
      video.metaDescription = updateVideoDto.metaDescription;
      video.content = updateVideoDto.content;
      video.videoUrl = updateVideoDto.videoUrl;
      video.category = category;
      video.photoURL = photoURL;
      return video.save();
    } else {
      video.title = updateVideoDto.title;
      video.metaDescription = updateVideoDto.metaDescription;
      video.content = updateVideoDto.content;
      video.category = category;
      video.videoUrl = updateVideoDto.videoUrl;
      return video.save();
    }

  }
}
