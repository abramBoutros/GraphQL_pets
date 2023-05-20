import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PetsService } from './pets.service';
import { Pet } from './pet.entity';
import { CreatePetInput } from './dtos/create-pet.input';

@Resolver(() => Pet)
export class PetsResolver {
  constructor(private petsService: PetsService) {}

  @Query(() => [Pet])
  pets(): Promise<Pet[]> {
    return this.petsService.findAll();
  }

  @Query(() => Pet)
  getPet(@Args('id') id: number): Promise<Pet> {
    return this.petsService.findOneById(id);
  }

  @Mutation(() => Pet)
  createPet(
    @Args('createPetInput') createPetInput: CreatePetInput,
  ): Promise<Pet> {
    return this.petsService.createPet(createPetInput);
  }
}
