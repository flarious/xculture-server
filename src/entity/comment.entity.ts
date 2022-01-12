import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


@Entity('comments')              // create a table name events
export class CommentsEntity {
    
        @PrimaryGeneratedColumn()
        Comment_ID: number;


        @Column()
        Liked_Comment: number;


        @Column()
        Date: Date;


        @Column()
        Body: string;


        @Column()
        Incognito: boolean;


        @Column()
        Post_ID: number;


        @Column()
        User_ID: number;


        @Column()
        Report_Amount: number;


}