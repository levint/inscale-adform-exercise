import { addPet } from '../../use-cases';

export default function resolveAddPet(parent, { input }, ctx) {
  return addPet(input);
}
