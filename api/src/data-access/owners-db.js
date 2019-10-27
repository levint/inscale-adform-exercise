export default function makeOwnersDb({ makeDb }) {
  return Object.freeze({
    findAll,
    findById,
    insert,
  });
  async function findAll() {
    const db = await makeDb();
    return await db.get('owners').value();
  }
  async function findById({ id }) {
    const db = await makeDb();
    return await db
      .get('owners')
      .find({ id })
      .value();
  }
  async function insert({ id = Id.makeId(), ...ownerProps }) {
    const db = await makeDb();
    const owner = { id, ...ownerProps };
    await db
      .get('owners')
      .push(owner)
      .write();
    return owner;
  }
}
