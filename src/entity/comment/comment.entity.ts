import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ForumEntity } from '../forum/forum.entity';
import { ReplyEntity } from '../reply/reply.entity';


@Entity('comments')              // create a table name events
export class CommentsEntity {
    
        @PrimaryGeneratedColumn({ name: "comment_id" })
        id: number;


        @Column({ name: "liked_comments" })
        liked: number;


        @Column({ name: "date" })
        date: Date;


        @Column()
        update_date: Date;


        @Column({ name: "body" })
        body: string;


        @Column({ name: "incognito" })
        incognito: boolean;


        @Column()
        author: string;


        @Column()
        reply_amount: number;
        

        @ManyToOne(() => ForumEntity, forum => forum.comments)
        forum: ForumEntity;


        @OneToMany(() => ReplyEntity, reply => reply.comment)
        replies: ReplyEntity[];



        // @Column({ name: "post_id" })
        // id: number;


        // @Column({ name: "user_id" })
        // id: number;


        // @Column({ name: "report_amount" })
        // amount: number;


}