import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tag')              // create a table name events
export class TagEntity {
    
        @PrimaryGeneratedColumn({ name: "tag_id" })
        id: number;


        @Column()
        name: string;


        @Column()
        user_amount: number;


}