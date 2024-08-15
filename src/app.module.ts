import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import modulesList from './Modules';
import { ORMModule } from './Common/Config/TypeormModule';

@Module({
  imports: [
    ORMModule,
    ...modulesList
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
