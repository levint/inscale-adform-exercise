import { getOwner } from '../../use-cases';

export default async function resolveGetOwner(parent, { id }, ctx) {
  return getOwner({ id });
}
