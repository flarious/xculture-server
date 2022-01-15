import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { title } from "process";
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
        @Body('thumbnail') thumbnail: string
    ) {
        let date = new Date();

        await this.service.createForum(title, subtitle, content, thumbnail, false, 0, 0, date, date)
    }

    /* @Get("/:forumID/edit") ← Might not need, can use detail from GET /forums/:forumID for edit page */

    /* http.put(//10.0.2.2:3000/forums/12348569) */
    
    @Put("/:forumID")
    async updateForum(
        @Param("forumID") forumID: number,
        @Body("title") title: string,
        @Body('subtitle') subtitle: string,
        @Body('content') content: string,
        @Body('thumbnail') thumbnail: string,
        @Body('incognito') incognito: string,
        @Body('viewed') viewed: string,
        @Body('favorited') favorited: string,
        @Body('date') date: string,
    ) {
        let update_date = new Date();
        console.log(update_date)
        await this.service.updateForum(forumID, title, subtitle, content, thumbnail, incognito, viewed, favorited, date, update_date);
    }
    

    @Get("/:forumID/report")
    async getReportDetail() {
        /*
        Get report detail → Every item share the same report topic so no need to use :forumID
        Might need to create and move to Report section of API
        Because current way to access really don't do much and have high redundancy → report from forum, event, commu have the same page but different path, WHY!??
        */
    }
    
    @Put("/:forumID/report")
    async reportForum(@Param("forumID") forumID: number) {
        /*
        This time, we need :forumID because we need to use to store the report for admin
        Still need to move to Report section of API, perhaps
        */
    }

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