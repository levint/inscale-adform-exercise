export default function buildMakePet({ Id, makePetType }) {
  return function makePet({
    id = Id.makeId(),
    type,
    name,
    colour,
    age,
    breed,
    ownerId,
  }) {
    if (!Id.isValidId(id)) {
      throw new Error('Pet must have a valid id');
    }
    if (!type) {
      throw new Error('Pet must be of certain type');
    }
    if (!name) {
      throw new Error('Pet must have a name');
    }
    if (!colour) {
      throw new Error('Pet must have a colour');
    }
    if (!age) {
      throw new Error('Pet must have an age');
    }
    if (!breed) {
      throw new Error('Pet must have a breed');
    }

    const validType = makePetType({ type });

    return Object.freeze({
      getId: () => id,
      getType: () => validType,
      getName: () => name,
      getColour: () => colour,
      getAge: () => age,
      getBreed: () => breed,
      getOwnerId: () => ownerId,
      setOwnerId: ownerId => ownerId,
    });
  };
}
