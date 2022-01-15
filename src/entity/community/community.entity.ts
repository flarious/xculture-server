import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


@Entity('community')              // create a table name events
export class CommunityEntity {
    
        @PrimaryGeneratedColumn({ name: "community_id" })
        id: number;


        @Column({ name: "type" })
        type: boolean;        // Status


        @Column({ name: "short_desc" })
        shortdesc: string;


        @Column({ name: "desc" })
        desc: string;


        @Column()
        date: Date;


        @Column({ name: "thumbnail" })
        thumbnail: string;


        // @Column({ name: "report_amount" })
        // amount: number;


        // @Column({ name: "owner_id" })
        // id: number;


        // @Column({ name: "member_id" })
        // id: number;


}