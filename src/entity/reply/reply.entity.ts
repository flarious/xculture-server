import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


@Entity('reply')              // create a table name events
export class ReplyEntity {
    
        @PrimaryGeneratedColumn({ name: "reply_id" })
        id: number;


        @Column()
        liked_reply: number;


        @Column()
        date: Date;


        @Column()
        body: string;


        @Column()
        incognito: boolean;


        // @Column({ name: "comment_id" })
        // id: number;


        // @Column({ name: "user_id" })
        // id: number;


        // @Column()
        // post_update: Date;


        // @Column()
        // update_date: Date;


        // @Column()
        // report_amount: number;


}