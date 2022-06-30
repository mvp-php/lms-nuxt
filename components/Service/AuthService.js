import http from "../config/DataService";
class AuthService {
 
    callLogin(data){
        return http.post(`/call-login/`,data);
    }
    
<<<<<<< HEAD
=======
    callForgotPassword(data){
        return http.post(`/forgot-password/`,data);
    }
    
    callResetPassword(data,id){
        return http.post(`/reset-password/`+id,data);
    }
>>>>>>> e9aac409af105fa48d17e1dca462eb7bdeecc7b4
  }
  export default new AuthService();
