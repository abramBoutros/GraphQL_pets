import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateOwnerInput {
  @Field(() => Int, { description: 'Owner ID' })
  id: number;
}
