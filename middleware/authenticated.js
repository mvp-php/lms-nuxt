export default function ({ $auth, redirect }) {

  if (typeof window !== 'undefined') {

    // Perform localStorage action
    const user = localStorage.getItem('userData');
    console.log(user,'asdsad')
    if (user === null) {
      //redirect.push('/login');

    }

  }
}