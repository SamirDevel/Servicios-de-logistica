import { Module } from '@nestjs/common';
import { DbfController } from './dbf.controller';
import { DbfService } from './dbf.service';

@Module({
  controllers: [DbfController],
  providers: [DbfService]
})
export class DbfModule {}
