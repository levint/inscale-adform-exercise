export default function makeGetPet({ petsDb }) {
  return async function getPet({ id }) {
    if (!id) {
      throw new Error('Pet id is required');
    }
    return await petsDb.findById({ id });
  };
}
