
export default function authHeader() {

  if (typeof window !== 'undefined') {

    // Perform localStorage action
     var user = JSON.parse(localStorage.getItem('userData'));
<<<<<<< HEAD
     
=======
    console.log(user[0].token); 
>>>>>>> origin/main
    return { Authorization: 'Bearer '+user[0].token  };
  }


}