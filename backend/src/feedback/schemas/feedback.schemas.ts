import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { User } from 'src/user/schemas/user.schemas';

export type FeedbackDocument = Feedback & Document;

@Schema()
export class Feedback {
    @Prop()
    id: mongoose.Schema.Types.ObjectId;

    @Prop({ required: true })
    content: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId })
    createdBy: User

    @Prop({default: new Date()})
    createdAt: Date;
}

export const FeedbackSchema = SchemaFactory.createForClass(Feedback);