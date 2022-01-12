import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


@Entity('tag')              // create a table name events
export class TagEntity {
    
        @PrimaryGeneratedColumn()
        Tag: string;


        @Column()
        Tag_Amount: number;


}