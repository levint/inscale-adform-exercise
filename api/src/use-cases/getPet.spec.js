import chai, { expect } from 'chai';
import chaiAsPromised from 'chai-as-promised';
import makeGetPet from './getPet';
import makePetsDb from '../data-access/pets-db';
import makeDb, { clearDb } from '../../__tests__/fixtures/db';
import makeFakePet from '../../__tests__/fixtures/pet';

chai.use(chaiAsPromised);

describe('get pet', () => {
  let petsDb, getPet;

  before(() => {
    petsDb = makePetsDb({ makeDb });
    getPet = makeGetPet({ petsDb });
  });

  it('must include an id', async () => {
    expect(getPet({ id: undefined })).to.eventually.be.rejected;
  });

  it('retrieves a pet', async () => {
    const pet = makeFakePet();
    await petsDb.insert(pet);
    const petFromDb = await getPet({ id: pet.id });
    expect(petFromDb).to.have.property('id');
    expect(pet.id).to.equal(petFromDb.id);
  });

  after(async () => {
    await clearDb();
  });
});
