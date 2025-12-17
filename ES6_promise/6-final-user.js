import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default async function handleProfileSignup (firstName, lastName, fileName) {
  const promises = await Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)]);
  return promises.map(result => {
    if (result.status !== 'fulfilled') {
      result.value = String(result.reason);
    }
    return {'status': result.status, 'value': result.value};
  });
}
