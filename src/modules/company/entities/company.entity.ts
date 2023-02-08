import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { Field, ObjectType } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class Company {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  companyId: string;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  city: string;

  @ManyToMany(() => User, (user) => user.companies)
  @JoinTable()
  @Field(() => [User])
  users: User[];
}
