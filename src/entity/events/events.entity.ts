import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


@Entity('events')              // create a table name events
export class EventsEntity {
    
        @PrimaryGeneratedColumn({ name: "event_id" })
        id: number;

        @Column()
        date: Date;


        @Column()
        name: string;


        @Column()
        body: string;


        @Column()
        thumbnail: string;        // in case of url


        @Column()
        location: string;


        @Column()
        interested_amount: number;


        @Column()
        report_amount: number;


        // @Column({ name: "user_id" })
        // id: number;



}