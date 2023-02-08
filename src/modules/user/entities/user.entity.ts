import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from '../../../common/entities/base.entity';
import { Field, ObjectType } from '@nestjs/graphql';
import { Company } from '../../company/entities/company.entity';

@Entity()
@ObjectType()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  userId: string;

  @Column()
  @Field()
  email: string;

  @Column({nullable: true})
  @Field({ nullable: true })
  phone?: string;

  @Column({nullable: true, default: 'USER'})
  @Field()
  role: string;

  @ManyToMany(() => Company, (company) => company.users)
  @Field(() => [Company])
  companies: Company[];
}
