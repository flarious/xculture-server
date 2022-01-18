import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { CommentsService } from "./comments.service";

@Controller("/forums/:forumID/comments")
export class CommentsController {
    constructor(private readonly service: CommentsService) {}

    @Post()
    async commentForum (
        @Param("forumID") forumID: number,
        @Body("body") body: string,
        @Body("author") author: string,
        @Body("incognito") incognito: boolean
    ) {
        await this.service.commentForum(forumID, body, author, incognito);
    }

    /*
    @Put("/:commentID")
    async editComment (
        @Param("commentID") commentID: number,
        @Body("body") body: string,
        @Body("author") author: string,
        @Body("incognito") incognito: boolean,
    ) {
        await this.service.updateComment(commentID, body, author, incognito);
    }
    */

    /*
    @Get("/:commentID/report")
    async getReportDetail() {

    }

    @Post("/:commentID/report")
    async reportComment() {

    }
    */
    /*
    @Put("/:commentID/favorite")
    async favoriteComment(
        @Param("commentID") commentID: number
    ) {
        await this.service.favoriteComment(commentID)
    }

    @Put("/:commentID/unfavorite")
    async unfavoriteComment (
        @Param("commentID") commentID: number
    ) {
        await this.service.unfavoriteComment(commentID)
    }
    */
}