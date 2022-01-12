import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


@Entity('events')              // create a table name events
export class EventsEntity {
    
        @PrimaryGeneratedColumn()
        Event_ID: number;

        @Column()
        Date: Date;


        @Column()
        Event_Topic: string;


        @Column()
        Body: string;


        @Column()
        Thumbnail: string;        // in case of url


        @Column()
        Location: string;


        @Column()
        Interested_Num: number;


        @Column()
        User_ID: number;


        @Column()
        Report_Amount: number;


}