import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


@Entity('community')              // create a table name events
export class CommunityEntity {
    
        @PrimaryGeneratedColumn()
        Community_ID: number;


        @Column()
        Owner_ID: number;


        @Column()
        Member_ID: number;


        @Column()
        Community_Type: boolean;        // Status


        @Column()
        Short_Desc: string;


        @Column()
        Desc: string;


        @Column()
        Date: Date;


        @Column()
        Thumnail: string;


        @Column()
        Report_Amount: number;


}