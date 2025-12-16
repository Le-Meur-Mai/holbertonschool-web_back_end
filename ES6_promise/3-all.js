import {uploadPhoto} from './utils.js';
import {createUser} from './utils.js';

export default async function handleProfileSignup() {
  try {
    const promises = await Promise.all([uploadPhoto(), createUser()]);
    console.log(`${promises[0].body} ${promises[1].firstName} ${promises[1].lastName}`);
  } catch {console.log('Signup system offline')};
}
