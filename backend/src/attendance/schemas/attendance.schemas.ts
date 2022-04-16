import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export type AttendanceDocument = Attendance & Document;

@Schema()
export class Attendance {
  @Prop()
  id: mongoose.Schema.Types.ObjectId;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  code: string;

  @Prop()
  startDate: Date;

  @Prop()
  endDate: Date;
}

export const AttendanceSchema = SchemaFactory.createForClass(Attendance);