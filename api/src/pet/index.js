import Id from '../Id';
import buildMakePet from './pet';
import buildMakePetType from './petType';

const makePetType = buildMakePetType({ isValidPetType });
const makePet = buildMakePet({ Id, makePetType });

function isValidPetType(type) {
  return ['DOG', 'CAT'].includes(type);
}

export default makePet;
