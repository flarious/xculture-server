import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user_tag')              // create a table name events
export class UserTagEntity {
    
        @PrimaryGeneratedColumn({ name: "ีuser_tag_id" })
        id: number;


        // @Column({ name: "tag_id" })
        // id: number;


        // @Column({ name: "user_id" })
        // id: number;


}