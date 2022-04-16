import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Category } from 'src/category/schemas/category.schemas';

export type VideoDocument = Video & Document;

@Schema()
export class Video {
  @Prop()
  id: mongoose.Schema.Types.ObjectId;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  videoUrl: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Category' })
  category: Category;

  @Prop({ required: true })
  content: string;

  @Prop({ required: true })
  metaDescription: string;

  @Prop()
  photoURL: string;

  @Prop()
  createdBy: string;

  @Prop({ default: new Date() })
  createdAt: Date;
}

export const VideoSchema = SchemaFactory.createForClass(Video);