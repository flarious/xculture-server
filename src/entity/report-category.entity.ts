import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


@Entity('report-category')              // create a table name events
export class ReportCategoryEntity {
    
        @PrimaryGeneratedColumn()
        Report_Cate: string;


        @Column()
        Score_Deduction: number;

}