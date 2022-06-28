import http from "../config/DataService";
class AuthService {
 
    callLogin(data){
        return http.post(`/call-login/`,data);
    }
    
    
  }
  export default new AuthService();
