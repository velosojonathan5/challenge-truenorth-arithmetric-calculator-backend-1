import { Record } from '../../entities/record.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'records' })
export class RecordTypeorm implements Record {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  amount: number;

  @Column()
  userBalance: number;

  @Column()
  operationResponse: string;

  @Column()
  date: Date;

  @Column()
  operationId: number;

  @Column()
  userId: number;
}
