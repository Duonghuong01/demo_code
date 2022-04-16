import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CommentDto } from './dto/comment.dto';
import { Comment, CommentDocument } from './schemas/comment.schemas';

@Injectable()
export class CommentService {
    constructor(@InjectModel(Comment.name) private commentModel: Model<CommentDocument>,

    ) { }

    async getComment(typeId: string) {
        return this.commentModel.find({ typeId }).populate("createdBy", "fullName photoURL", "User")
    }

    async addComment(createCommentDto: CommentDto, user): Promise<Comment> {
        let comment = new this.commentModel({ ...createCommentDto })
        comment.createdBy = user;
        return comment.save();
    }
    
    async deleteComment(commentId: string) {
        let comment = await this.commentModel.findById(commentId);
        return comment.remove();

    }

    async updateComment(commentId: string, title: string) {
        let comment = await this.commentModel.findById(commentId);
        if (comment) {
            comment.title = title;
            return comment.save();
        }
    }
}
