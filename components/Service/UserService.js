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

  callUpdatePassword(data){
    console.log(data,"daksdj")
    return http.post(`/call-update-password/`,data,{ headers: authHeader() });
  }
  importCSVFile(data){
  
    return http.post(`/import-csv/`,data,{ headers: authHeader() });
  }

  profile(){
    return http.get(`/call-user-profile/`,{ headers: authHeader() });
  }
  profileUpdate(data){
    return http.post(`/profile-update/`,data,{ headers: authHeader() });
  }
  activeUser(data){
    return http.post(`/reactive-user/`,data,{ headers: authHeader() });
  }
}
export default new UserService();
