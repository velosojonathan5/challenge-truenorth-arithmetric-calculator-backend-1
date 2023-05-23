import { Controller, Post, Body } from '@nestjs/common';
import { OperationService } from './operation.service';
import { CreateOperationDto } from './dto/create-operation.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CalculateDto } from './dto/calculate.dto';

@ApiTags('operation')
@ApiBearerAuth()
@Controller('operation')
export class OperationController {
  constructor(private readonly operationService: OperationService) {}

  // @Post()
  // create(@Body() createOperationDto: CreateOperationDto) {
  //   return this.operationService.create(createOperationDto);
  // }

  @Post('calculate')
  calculate(@Body() calculateDto: CalculateDto) {
    return this.operationService.calculate(calculateDto);
  }

  // @Post('generate-random-string')
  // generateRandomString(@Body() createOperationDto: CreateOperationDto) {
  //   return this.operationService.generateRandomString();
  // }

  // @Get()
  // findAll() {
  //   return this.operationService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.operationService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateOperationDto: UpdateOperationDto) {
  //   return this.operationService.update(+id, updateOperationDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.operationService.remove(+id);
  // }
}
