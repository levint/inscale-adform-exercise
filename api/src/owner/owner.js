export default function buildMakeOwner({ Id }) {
  return function makeOwner({ id, name, address, phone, email }) {
    if (!Id.isValidId(id)) {
      throw new Error('Owner must have a valid id');
    }
    if (!name) {
      throw new Error('Owner must have a name');
    }
    if (!address) {
      throw new Error('Owner must have an address');
    }
    if (!phone) {
      throw new Error('Owner must have a phone');
    }
    if (!email) {
      throw new Error('Owner must have an email');
    }

    return Object.freeze({
      getId: () => id,
      getName: () => name,
      getAddress: () => address,
      getPhone: () => phone,
      getEmail: () => email,
    });
  };
}
