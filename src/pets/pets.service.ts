import { Injectable } from '@nestjs/common';
import { Pet } from './pet.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePetInput } from './dtos/create-pet.input';

@Injectable()
export class PetsService {
  constructor(
    @InjectRepository(Pet) private readonly petsRepository: Repository<Pet>,
  ) {}

  async findAll(): Promise<Pet[]> {
    return this.petsRepository.find();
  }

  createPet(createPetInput: CreatePetInput): Promise<Pet> {
    const newPet = this.petsRepository.create(createPetInput);

    return this.petsRepository.save(newPet);
  }

  findOneById(id: number): Promise<Pet> {
    return this.petsRepository.findOneOrFail({ where: { id } });
  }
}
