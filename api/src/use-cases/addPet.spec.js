import chai, { expect } from 'chai';
import chaiAsPromised from 'chai-as-promised';
import makeAddPet from './addPet';
import makePetsDb from '../data-access/pets-db';
import makeDb, { clearDb } from '../../__tests__/fixtures/db';
import makeFakePet from '../../__tests__/fixtures/pet';

chai.use(chaiAsPromised);

describe('add pet', () => {
  let petsDb;

  before(() => {
    petsDb = makePetsDb({ makeDb });
  });

  it('inserts a pet to the database', async () => {
    const newPet = makeFakePet();
    const addPet = makeAddPet({ petsDb });
    const inserted = await addPet(newPet);
    expect(inserted.id).to.be.equal(newPet.id);
  });

  after(async () => {
    await clearDb();
  });
});
