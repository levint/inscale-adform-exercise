export default function makeListOwners({ ownersDb }) {
  return async function listOwners() {
    return await ownersDb.findAll();
  };
}
