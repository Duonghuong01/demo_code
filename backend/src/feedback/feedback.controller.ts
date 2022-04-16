import { Body, Controller, Get, Post, UseGuards, Request, Delete, Param } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { FeedbackService } from './feedback.service';

@Controller('feedback')
export class FeedbackController {
    constructor(private feedbackService: FeedbackService) { }

    @Get()
    async getFeedback() {
        return this.feedbackService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Post('create')
    async createFeedback(@Body() body, @Request() req) {
        return this.feedbackService.create(body.content, req.user._doc._id)
    }

    @Delete('delete/:id')
    async remove(@Param('id') id) {
        return this.feedbackService.delete(id);
    }
}
