import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { User } from 'src/user/schemas/user.schemas';

export type CommentDocument = Comment & Document;

@Schema()
export class Comment {
    @Prop()
    id: mongoose.Schema.Types.ObjectId;

    @Prop()
    typeId: string;

    @Prop({ required: true })
    title: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    createdBy: User;

    @Prop({ default: Date() })
    createdAt: Date

}

export const CommentSchema = SchemaFactory.createForClass(Comment);