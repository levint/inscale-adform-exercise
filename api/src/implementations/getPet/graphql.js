import { getPet } from '../../use-cases';

export default function resolveGetPet(parent, { id }, ctx) {
  return getPet({ id });
}
