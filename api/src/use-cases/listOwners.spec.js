import { expect } from 'chai';
import makeListOwners from './listOwners';
import makeOwnersDb from '../data-access/owners-db';
import makeDb, { clearDb } from '../../__tests__/fixtures/db';
import makeFakeOwner from '../../__tests__/fixtures/owner';

describe('list owners', () => {
  let ownersDb, listOwners;

  before(() => {
    ownersDb = makeOwnersDb({ makeDb });
    listOwners = makeListOwners({ ownersDb });
  });

  it('gets all owners', async () => {
    const firstOwner = makeFakeOwner();
    const secondOwner = makeFakeOwner();
    const owners = [firstOwner, secondOwner];
    await Promise.all(owners.map(ownersDb.insert));
    const ownerList = await listOwners();
    expect(ownerList.length).to.be.at.least(2);
  });

  after(async () => {
    await clearDb();
  });
});
