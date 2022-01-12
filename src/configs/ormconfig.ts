import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { WordsEntity } from "src/entity/words.entity";

const ormConfig: TypeOrmModuleOptions = {
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "Nut@27052544",
    database: "test",           // Database we want to use
    synchronize: true,          // false if on production -> Might cause problem to real app
                                // Setting to true will create table (Only table) automatically, still need to create database yourself
    entities: [WordsEntity]     // Table(s) we want to use
}

export { ormConfig }