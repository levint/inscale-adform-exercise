import { makeDb } from '../src/data-access';
import initialData from './db.seed';

(async function setupDb() {
  const db = await makeDb();
  await db.setState(initialData).write();
  console.log('Database setup complete...');
})();
