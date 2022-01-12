import { Controller, Get, Param, Post, Put } from "@nestjs/common";
import { ForumsService } from "./forums.service";

/* http.get(//10.0.2.2:3000/forums) */
@Controller("/forums")
export class ForumsController {
    constructor(private readonly service: ForumsService) {}

    /* Get all forums for home page */
    @Get()
    async getForumsAllCategories() {
        /*
        Get forums from 3 category (Recommend (later), Trending (Highest views count), Newest (Recent date))
        */
    }

    /* Get forums by category for see all page */
    @Get("/:category")
    async getForumsByCategory(@Param("category") category: string) {
        /*
        Get forums by category
        */
    }

    /* Get a forum's detail */
    @Get("/:forumID")
    async getForum(@Param("forumID") forumID: number) {
        /*
        Get forum detail
        */
    }

    @Post("")
    async createForum() {
        /*
        Create forum from detail in HTTP's body
        */
    }

    /* @Get("/:forumID/edit") ← Might not need, can use detail from GET /forums/:forumID for edit page */

    /* http.put(//10.0.2.2:3000/forums/12348569) */
    @Put("/:forumID")
    async updateForum(@Param("forumID") forumID: number) {
        /* 
        Full example → updateForum(@Param("forumID") forumID: number, @CurrentUser() curUserID: number, @Body())
        Validate user, forum, forum's detail, check if user is the author 
        If all pass, then update forum 
        */
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
        /*
        Need to add part about User in parameter section
        Might need to move to Favorite section of API, If that way have more sense
        */
    }

    @Put("/:forumID/unfavorite")
    async unfavoriteForum(@Param("forumID") forumID: number) {
        /*
        Same as favoriteForum()
        */
    }





}