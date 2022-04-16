import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Attendance } from 'src/attendance/schemas/attendance.schemas';
import { User } from 'src/user/schemas/user.schemas';

export type AttendanceUserDocument = AttendanceUser & Document;

@Schema()
export class AttendanceUser {
  @Prop()
  id: mongoose.Schema.Types.ObjectId;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Attendance' })
  attendance: Attendance;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;
  
  @Prop({ default: 'Chưa điểm danh' })
  status: string;
}

export const AttendanceUserSchema = SchemaFactory.createForClass(AttendanceUser);