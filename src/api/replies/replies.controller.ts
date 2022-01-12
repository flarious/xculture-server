import { Controller, Get, Put, Post } from "@nestjs/common";
import { RepliesService } from "./replies.service";

@Controller("/forums/:forumID/comments/:commentID/replies")
export class RepliesController {
    constructor(private readonly service: RepliesService) {}

    @Get()
    async getAllCommentReplies () {

    }

    @Post()
    async replyComment () {

    }

    @Put("/:replyID/edit")
    async editReply () {

    }

    @Get("/:replyID/report")
    async getReportDetail() {

    }

    @Post("/:replyID/report")
    async reportReply() {

    }

    @Put("/:replyID/favorite")
    async favoriteReply() {

    }

    @Put("/:replyID/unfavorite")
    async unfavoriteReply () {
        
    }
}