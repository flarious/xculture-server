import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { ForumsService } from "./forums.service";

/* http.get(//10.0.2.2:3000/forums) */
@Controller("/forums")
export class ForumsController {
    constructor(private readonly service: ForumsService) {}

    /* Get all forums for home page */
    @Get()
    async getForumsAllCategories() {
        return await this.service.getForums();
    }

    /* Get a forum's detail */
    @Get("/:forumID")
    async getForum(@Param("forumID") forumID: number) {
        return await this.service.getForum(forumID);
    }

    @Post("")
    async createForum(
        @Body('title') title: string,
        @Body('subtitle') subtitle: string,
        @Body('content') content: string,
        @Body('thumbnail') thumbnail: string,
        @Body('incognito') incognito: boolean,
        @Body('tags') tags: number[],
    ) {
        await this.service.createForum(title, subtitle, content, thumbnail, incognito, tags);
    }
    
    @Put("/:forumID")
    async updateForum(
        @Param("forumID") forumID: number,
        @Body("title") title: string,
        @Body('subtitle') subtitle: string,
        @Body('content') content: string,
        @Body('thumbnail') thumbnail: string,
        @Body('incognito') incognito: boolean,
        @Body('tags') tags: string[],
    ) {
        await this.service.updateForum(forumID, title, subtitle, content, thumbnail, incognito, tags);
    }
    
    /*
    @Get("/:forumID/report")
    async getReportDetail() {
    }
    
    @Put("/:forumID/report")
    async reportForum(@Param("forumID") forumID: number) {
    }
    */

    @Put("/:forumID/favorite")
    async favoriteForum(@Param("forumID") forumID: number) {
        await this.service.forumFavorite(forumID);
    }

    @Put("/:forumID/unfavorite")
    async unfavoriteForum(@Param("forumID") forumID: number) {
        await this.service.forumUnfavorite(forumID);
    }

    @Put("/:forumID/viewed")
    async viewForum(
        @Param("forumID") forumID: number,
    ) {
        await this.service.updateForumView(forumID);
    }

}