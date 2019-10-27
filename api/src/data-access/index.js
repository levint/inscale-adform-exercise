import lowdb from 'lowdb';
import FileAsync from 'lowdb/adapters/FileAsync';
import makePetsDb from './pets-db';
import makeOwnersDb from './owners-db';

const dataSource = new FileAsync('./resources/db.json');
const db = lowdb(dataSource);

export function makeDb() {
  return db;
}

const ownersDb = makeOwnersDb({ makeDb });
const petsDb = makePetsDb({ makeDb });

export { ownersDb, petsDb };
