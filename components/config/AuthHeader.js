
export default function authHeader() {

  if (typeof window !== 'undefined') {

    // Perform localStorage action
     var user = JSON.parse(localStorage.getItem('userData'));
     
    return { Authorization: 'Bearer '+user[0].token  };
  }


}