import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


@Entity('report')              // create a table name events
export class ReportEntity {
    
        @PrimaryGeneratedColumn()
        Report_ID: number;


        @Column()
        Report_Cate: string;


        @Column()
        Add_Detail: string;


        @Column()
        User_ID: number;


        @Column()
        Target_ID: number;


        @Column()
        Target_Type: string;


}