import chai, { expect } from 'chai';
import chaiAsPromised from 'chai-as-promised';
import makeGetOwner from './getOwner';
import makeOwnersDb from '../data-access/owners-db';
import makeDb, { clearDb } from '../../__tests__/fixtures/db';
import makeFakeOwner from '../../__tests__/fixtures/owner';

chai.use(chaiAsPromised);

describe('get owner', () => {
  let ownersDb, getOwner;

  before(() => {
    ownersDb = makeOwnersDb({ makeDb });
    getOwner = makeGetOwner({ ownersDb });
  });

  it('must include an id', async () => {
    expect(getOwner({ id: undefined })).to.eventually.be.rejected;
  });

  it('retrieves an owner', async () => {
    const owner = makeFakeOwner();
    await ownersDb.insert(owner);
    const ownerFromDb = await getOwner({ id: owner.id });
    expect(ownerFromDb).to.have.property('id');
    expect(owner.id).to.equal(ownerFromDb.id);
  });

  after(async () => {
    await clearDb();
  });
});
