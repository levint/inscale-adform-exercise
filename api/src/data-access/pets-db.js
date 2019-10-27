import Id from '../Id';

export default function makePetsDb({ makeDb }) {
  return Object.freeze({
    findById,
    findByOwnerId,
    insert,
    update,
  });
  async function findById({ id }) {
    const db = await makeDb();
    return await db
      .get('pets')
      .find({ id })
      .value();
  }
  async function findByOwnerId({ ownerId }) {
    const db = await makeDb();
    return await db
      .get('pets')
      .filter({ ownerId })
      .value();
  }
  async function insert({ id = Id.makeId(), ...petProps }) {
    const db = await makeDb();
    const pet = { id, ...petProps };
    await db
      .get('pets')
      .push(pet)
      .write();
    return pet;
  }
  async function update({ id, ...petProps }) {
    const db = await makeDb();
    const pet = { id, ...petProps };
    await db
      .get('pets')
      .find({ id })
      .assign({ ...petProps })
      .write();
    return pet;
  }
}
