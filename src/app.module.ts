import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { OperationModule } from './operation/operation.module';
import { RecordModule } from './record/record.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserTypeorm } from './users/repositories/implementations/user.typeorm.entity';
import { OperationTypeorm } from './operation/repositories/implementations/operation.typeorm.entity';
import { RecordTypeorm } from './record/repositories/implementations/record.typeorm.entity';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    OperationModule,
    RecordModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'my-secret-pw',
      database: 'arithmetric_calculator',
      entities: [UserTypeorm, OperationTypeorm, RecordTypeorm],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
