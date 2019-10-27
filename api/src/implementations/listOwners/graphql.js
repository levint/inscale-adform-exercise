import { listOwners } from '../../use-cases';

export default function resolveListOwners(parent, args, ctx) {
  return listOwners();
}
