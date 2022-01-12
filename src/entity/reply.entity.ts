import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


@Entity('reply')              // create a table name events
export class ReplyEntity {
    
        @PrimaryGeneratedColumn()
        Reply_ID: number;


        @Column()
        Liked_Reply: number;


        @Column()
        Date: Date;


        @Column()
        Body: string;


        @Column()
        Incognito: boolean;


        @Column()
        Comment_ID: number;


        @Column()
        User_ID: number;


        @Column()
        Report_Amount: number;


}