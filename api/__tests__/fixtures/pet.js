import faker from 'faker';
import Id from './Id';

export default function makeFakePet(overrides) {
  const pet = {
    id: Id.makeId(),
    type: 'DOG',
    name: faker.name.firstName(),
    colour: 'brown',
    age: faker.random.number(20),
    breed: 'Pug',
  };
  return {
    ...pet,
    ...overrides,
  };
}
