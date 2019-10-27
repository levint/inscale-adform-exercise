export default function buildMakePetType({ isValidPetType }) {
  return function makePetType({ type }) {
    if (!isValidPetType(type)) {
      throw new Error('Pet type must be a valid');
    }
    return type;
  };
}
