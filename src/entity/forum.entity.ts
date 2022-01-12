import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


@Entity('forum')              // create a table name events
export class ForumEntity {
    
        @PrimaryGeneratedColumn()
        Post_ID: number;

        @Column()
        Date: Date;


        @Column()
        Forum_Topic: string;


        @Column()
        Body: string;


        @Column()
        Thumbnail: string;        // in case of url


        @Column()
        Picture: string;        // in case of url


        @Column()
        Incognito: boolean;        // in case of url


        @Column()
        Viewed: number;


        @Column()
        Liked_Forum: number;


        @Column()
        User_ID: number;


        @Column()
        Report_Amount: number;


        @Column()
        Comment: string;


        @Column()
        Tag: string;


}