import http from "../config/DataService";
import authHeader from '../config/AuthHeader';
class RoleDataService {
  getEntitiesAndPermissionList() {
   
    return http.get(`/entities-list/`, { headers: authHeader() });
  }

  getRoleList(page,data){
    return http.get(`/role-list?page=`+page+`&search=`+data, { headers: authHeader() });
  }
  create(data){
    return http.post(`/call-role/`,data, { headers: authHeader() });
  }

  getDetailsById(id){
    return http.get(`/role-detail/${id}`, { headers: authHeader() });
  }
  updateRole(data,id){

    return http.post(`/role-update/${id}`,data, { headers: authHeader() });
  }
  getAllRoleList(){
    return http.get(`/all-role-list`, { headers: authHeader() });
  }

  getViewRoleDetail(id){
    return http.get(`/view-role-detail/${id}`, { headers: authHeader() });
  }
  deleteRole(id){
  
    return http.post(`/role-delete/`,{id: id},{ headers: authHeader() });
  }
  bulkRoleDelete(id){
  
    return http.post(`/bulk-role-delete/`,{id: id},{ headers: authHeader() });
  }

  setDefaultRoles(data){
    return http.post(`/set-default-role/`,data,{ headers: authHeader() });
  }
  
}
export default new RoleDataService();
