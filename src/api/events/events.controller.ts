import { Controller, Get, Param, Post, Put } from "@nestjs/common";

@Controller("/events")
export class EventsController {
    

    @Get()
    async getEventsAllCategories() {
        /*
        Get Events from 3 category (Recommend (later), Trending (Highest views count), Newest (Recent date))
        */
    }

    @Get("/:category")
    async getEventsByCategory(@Param("category") category: string) {
        /*
        Get events by category
        Might not need if we give all events
        */
    }

    @Get("/:eventID")
    async getEvent(@Param("eventID") eventID: number) {
        /*
        Get event detail
        */
    }

    @Post()
    async createEvent() {
        /*
        Create event from detail in HTTP's body
        */
    }

    @Put("/:eventID")
    async updateEvent() {
        /* 
        Update event from detail in HTPP's body
        */
    }

    @Put("/:eventID/join")
    async joinEvent() {
        /*
        Update event with +1 interested
        Need to get user info too
        Might need to do something, because if there are lots of interest going on, the value might lost (transaction concept)
        */
    }

    @Get("/:eventID/report")
    async getReportDetail() {
        /*
        Get list of report categories
        */
    }
    
    @Put("/:eventID/report")
    async reportEvent(@Param("eventID") eventID: number) {
        /*
        Store report of this event
        */
    }
}