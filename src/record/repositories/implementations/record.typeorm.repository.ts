import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { RecordTypeorm } from './record.typeorm.entity';
import { Record } from '../../entities/record.entity';
import { RecordRepository } from '../record.repository.interface';
import { CreateRecordDto } from '../../dto/create-record.dto';

@Injectable()
export class RecordTypeormRepository implements RecordRepository {
  constructor(
    @InjectRepository(RecordTypeorm)
    private recordRepository: Repository<Record>,
  ) {}

  findAll(): Promise<Record[]> {
    return this.recordRepository.find();
  }

  findLastRecordByUser(userId: number): Promise<Record> {
    return this.recordRepository.findOne({ where: { userId } });
  }

  create(createRecordDto: CreateRecordDto): Promise<Record> {
    const record = this.recordRepository.create(createRecordDto);
    return this.recordRepository.save(record);
  }
}
