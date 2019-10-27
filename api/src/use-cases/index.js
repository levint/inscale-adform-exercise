import makeListOwners from './listOwners';
import makeGetOwner from './getOwner';
import makeGetPet from './getPet';
import makeAddPet from './addPet';
import { ownersDb, petsDb } from '../data-access';

const listOwners = makeListOwners({ ownersDb });
const getOwner = makeGetOwner({ ownersDb });
const getPet = makeGetPet({ petsDb });
const addPet = makeAddPet({ petsDb });

const service = Object.freeze(listOwners, getOwner, getPet, addPet);

export default service;
export { listOwners, getOwner, getPet, addPet };
