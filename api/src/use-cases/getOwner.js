export default function makeGetOwner({ ownersDb }) {
  return async function getOwner({ id }) {
    if (!id) {
      throw new Error('Owner id is required');
    }
    return await ownersDb.findById({ id });
  };
}
