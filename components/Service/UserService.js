import http from "../config/DataService";
import authHeader from '../config/AuthHeader';
class UserService {
 
  saveUser(data){
    return http.post(`/user-save/`,data, { headers: authHeader() });
  }

  getUserList(data,currentPage){
    return http.get(`/user-list?page=`+currentPage+`&search=`+data,{ headers: authHeader() });
  }
  
  getUserDetails(id){
    return http.get(`/edit-user-detail/${id}`, { headers: authHeader() });
  }
  updateUser(data,id){

    return http.post(`/user-update/${id}`,data, { headers: authHeader() });
  }
  getViewUserDetail(id){
    return http.get(`/view-user-detail/${id}`, { headers: authHeader() });
  }

  deleteUser(id){
  
    return http.post(`/user-delete/`,{id: id,},{ headers: authHeader() });
  }
  bulkUserDelete(bulkId){
    return http.post(`/user-bulk-delete/`,{id: bulkId,},{ headers: authHeader() });
  }

  callLogout(){
      return http.post(`/call-logout/`,'',{ headers: authHeader() });
  }
}
export default new UserService();
