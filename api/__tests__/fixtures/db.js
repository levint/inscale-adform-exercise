import lowdb from 'lowdb';
import FileAsync from 'lowdb/adapters/FileAsync';

const initialValue = {
  owners: [],
  pets: [],
};

const dataSource = new FileAsync('./__tests__/fixtures/db.json', {
  defaultValue: initialValue,
});
const db = lowdb(dataSource);

export default function makeDb() {
  return db;
}

export async function clearDb() {
  const db = await makeDb();
  await db.setState(initialValue).write();
  return true;
}
