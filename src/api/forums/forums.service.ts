import { Injectable } from "@nestjs/common";
import { ForumsRepository } from "src/repository/forums.repository";

@Injectable()
export class ForumsService {
    constructor(private readonly repository: ForumsRepository) {}

    async getForums() {
        return await this.repository.getForums();
    }

    async getForum(forumID) {
        return await this.repository.getForum(forumID);
    }

    async createForum(title, subtitle, content, thumbnail_url, author, incognito, viewed, favorite_amount, date, update_date) {
        await this.repository.createForum(title, subtitle, content, thumbnail_url, author, incognito, viewed, favorite_amount, date, update_date);
    }

    async updateForum(forumID, title, subtitle, content, thumbnail_url, author, incognito, viewed, favorite_amount, date, update_date) {
        await this.repository.updateForum(forumID, title, subtitle, content, thumbnail_url, author, incognito, viewed, favorite_amount, date, update_date);
    }

    async updateForumView(forumID) {
        await this.repository.updateForumView(forumID);
    }

    async forumFavorite(forumID) {
        await this.repository.forumFavorite(forumID);
    }

    async forumUnfavorite(forumID) {
        await this.repository.forumUnfavorite(forumID);
    }
}