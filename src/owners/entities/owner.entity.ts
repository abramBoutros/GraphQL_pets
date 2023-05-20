import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Pet } from '../../pets/pet.entity';

@Entity()
@ObjectType()
export class Owner {
  @PrimaryGeneratedColumn()
  @Field(() => Int, { description: 'Owner ID' })
  id: number;

  @Column()
  @Field(() => String, { description: 'Owner Name' })
  name: string;

  @OneToMany(() => Pet, (pet) => pet.owner)
  @Field(() => Owner)
  pets?: Pet[];
}
