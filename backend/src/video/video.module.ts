import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Video, VideoSchema } from './schemas/video.schemas';
import { VideoController } from './video.controller';
import { VideoService } from './video.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Video.name, schema: VideoSchema }])],
  controllers: [VideoController],
  providers: [VideoService]
})
export class VideoModule {}
