import faker from 'faker';
import Id from './Id';

export default function makeFakeOwner(overrides) {
  const owner = {
    id: Id.makeId(),
    name: faker.name.findName(),
    address: faker.address.streetAddress(true),
    phone: faker.phone.phoneNumber(),
    email: faker.internet.email(),
  };
  return {
    ...owner,
    ...overrides,
  };
}
