import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


@Entity('message')              // create a table name events
export class MessageEntity {
    
        @PrimaryGeneratedColumn()
        Message_ID: number;


        @Column()
        Message: number;


        @Column()
        User_ID: number;


        @Column()
        Community_ID: number;


}