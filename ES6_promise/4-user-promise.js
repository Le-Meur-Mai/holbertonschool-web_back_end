export default function signUpUser(firstName, lastName) {
  try {
    return Promise.resolve({'firstName': firstName, 'lastName': lastName});
  } catch {
    return new Error;
  }
}
