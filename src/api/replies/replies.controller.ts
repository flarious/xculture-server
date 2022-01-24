import { Controller, Get, Put, Post, Param, Body } from "@nestjs/common";
import { RepliesService } from "./replies.service";

@Controller("/forums/:forumID/comments/:commentID/replies")
export class RepliesController {
    constructor(private readonly service: RepliesService) {}

    @Post()
    async replyComment (
        @Param("commentID") commentID: number,
        @Body("content") body: string,
        @Body("incognito") incognito: boolean
    ) {
        await this.service.replyComment(commentID, body, incognito);
    }

    @Put("/:replyID")
    async editReply (
        @Param("replyID") replyID: number,
        @Body("content") body: string,
        @Body("incognito") incognito: boolean,
    ) {
        await this.service.updateReply(replyID, body, incognito);
    }
    /*
    @Get("/:replyID/report")
    async getReportDetail() {

    }

    @Post("/:replyID/report")
    async reportReply() {

    }
    */

    @Put("/:replyID/favorite")
    async favoriteReply(
        @Param('replyID') replyID: number,
    ) {
        await this.service.favoriteReply(replyID);
    }

    @Put("/:replyID/unfavorite")
    async unfavoriteReply (
        @Param('replyID') replyID: number,
    ) {
        await this.service.unfavoriteReply(replyID);
    }
}