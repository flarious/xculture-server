import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ForumsModule } from './api/forums/forums.module';
import { ormConfig } from './configs/ormconfig';


@Module({
  imports: [
    ForumsModule,
    TypeOrmModule.forRoot(ormConfig)
  ],
})
export class AppModule {}
