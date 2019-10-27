import makePet from '../pet';

export default function makeAddPet({ petsDb }) {
  return async function addPet(petProps) {
    const pet = makePet(petProps);
    return await petsDb.insert({
      id: pet.getId(),
      type: pet.getType(),
      name: pet.getName(),
      colour: pet.getColour(),
      age: pet.getAge(),
      breed: pet.getBreed(),
      ownerId: pet.getOwnerId(),
    });
  };
}
