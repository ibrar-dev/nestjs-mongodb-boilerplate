import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CodeSchema } from './code.model';
import { CodesController } from './codes.controller';
import { CodesService } from './codes.service';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'codes', schema: CodeSchema }]),

  ],
  controllers: [CodesController],
  providers: [CodesService],
  exports: [CodesService],
})
export class CodesModule {}
