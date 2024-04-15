export default function AuthHeader() {
  const user = JSON.parse(localStorage.getItem('user'));

  console.log('User from localStorage:', user);

  if (user && user.accessToken) {
      console.log('Bearer Token:', 'Bearer ' + user.accessToken);
      return { Authorization: 'Bearer ' + user.accessToken };
  } else {
      console.log('No Token Found');
      return {};
  }
}
