import { Controller, Get, Put } from "@nestjs/common";
import { UsersService } from "./users.service";

@Controller("/user")
export class UsersController {
    constructor(private readonly service: UsersService) {}

    @Get()
    async getUserProfile () {

    }

    @Put()
    async updateUserProfile () {

    }

    @Get("/forums")
    async getUserForums () {

    }

    @Get("/events")
    async getUserEvents () {

    }

    @Get("/communities")
    async getUserCommunities () {

    }

    @Get("/setting")
    async getUserSetting () {

    }

    @Put("/setting")
    async updateUserSetting () {

    }

    @Put("/password/change")
    async changePassword () {

    }

    @Put("/password/reset")
    async resetPassword () {

    }
    
    /* For forgetPassword, Let client generate a verification code and sent to user's email might be better */

}