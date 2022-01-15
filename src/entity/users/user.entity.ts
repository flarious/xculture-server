import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


@Entity('user')              // create a table name events
export class UserEntity {
    
        @PrimaryGeneratedColumn({ name: "user_id" })
        id: number;


        @Column()
        email: string;


        @Column()
        password: string;


        @Column()
        name: string;


        @Column({ name: "profile_picture_url" })
        profile_pic: string;


        @Column()
        bio: string;


        @Column()
        score: number;


        // @Column()
        // type_enum: string;


}