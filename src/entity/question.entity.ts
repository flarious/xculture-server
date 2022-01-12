import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


@Entity('question')              // create a table name events
export class QuestionEntity {
    
        @PrimaryGeneratedColumn()
        


        @Column("text", { array: true, default: "{}" })
        User_ID: string[];


        @Column("text", { array: true, default: "{}" })
        Answer: string[];


        @Column()
        Community_ID: number;


}