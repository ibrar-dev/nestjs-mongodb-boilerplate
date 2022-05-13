import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  ParseIntPipe,
  InternalServerErrorException,
  Delete,
  Patch

} from '@nestjs/common';
import { CodesService } from './codes.service';
import { CodeDto } from './code.dto';

@Controller('codes')
export class CodesController {
  constructor(private readonly codesService: CodesService) {}

  @Get('')
  async findAll() {
    try {
      const codes = await this.codesService.getCodes();
      return { statusCode: 200, data: codes, message: ['successfully Get'] };
    } catch (err) {
      throw new InternalServerErrorException(err, 'Error Occurred ');
    }
  }

  @Post()
  async addCode(@Body() body: CodeDto) {
    try {
      const generatedId = await this.codesService.insertCode(
        body.name,
        body.type
      );
      let data = { id: generatedId };
      return { statusCode: 200, data, message: ['successfully save'] };
    } catch (err) {
      throw new InternalServerErrorException(err, 'Error Occurred ');
    }
  }

  @Delete(':id')
  async removeCode(@Param('id') prodId: string) {
      await this.codesService.deleteCode(prodId);
      return null;
  }

  @Get(':id')
  getProduct(@Param('id') prodId: string) {
    return this.codesService.getSingleCode(prodId);
  }

  @Patch(':id')
  async updateProduct(
    @Param('id') prodId: string,
    @Body('name') prodTitle: string,
    @Body('type') prodDesc: string,
  ) {
    await this.codesService.updateCode(prodId, prodTitle, prodDesc);
    return null;
  }
}
