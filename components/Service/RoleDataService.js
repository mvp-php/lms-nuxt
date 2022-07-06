import http from "../config/DataService";
import authHeader from '../config/AuthHeader';
class RoleDataService {
  getEntitiesAndPermissionList() {
   
    return http.get(`/entities-list/`, { headers: authHeader() });
  }

  getRoleList(){
    return http.get(`/role-list/`, { headers: authHeader() });
  }
  create(data){
    return http.post(`/call-role/`,data, { headers: authHeader() });
  }

  getDetailsById(id){
    return http.get(`/role-detail/${id}`, { headers: authHeader() });
  }

  getAllRoleList(){
    return http.get(`/all-role-list`, { headers: authHeader() });
  }
  
}
export default new RoleDataService();
