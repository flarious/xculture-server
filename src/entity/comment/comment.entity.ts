import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


@Entity('comments')              // create a table name events
export class CommentsEntity {
    
        @PrimaryGeneratedColumn({ name: "comment_id" })
        id: number;


        @Column({ name: "liked_comments" })
        liked: number;


        @Column({ name: "date" })
        date: Date;


        @Column({ name: "body" })
        body: string;


        @Column({ name: "incognito" })
        incognito: boolean;


        // @Column({ name: "post_id" })
        // id: number;


        // @Column({ name: "user_id" })
        // id: number;


        // @Column({ name: "report_amount" })
        // amount: number;


}