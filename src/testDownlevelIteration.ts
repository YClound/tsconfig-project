export function getUserName(userId) {
  const userMap = {
    1: 'name',
    2: 'user'
  }
  for(let key of Object.keys(userMap)) {
    console.log(key, userMap[key]);
  }
  return userMap[userId];
}