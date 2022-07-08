import http from "../config/DataService";
class AuthService {
 
    callLogin(data){
        console.log(data);
        return http.post(`/call-login/`,data);
    }
    
    callForgotPassword(data){
        return http.post(`/forgot-password/`,data);
    }
    
    callResetPassword(data,id){
        return http.post(`/reset-password/`+id,data);
    }

   
  }
  export default new AuthService();
