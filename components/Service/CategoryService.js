import http from "../config/DataService";
class CategoryService {
    addCategory(data) {
        return http.post(`/category-save`, data);
    }
    getCategoryList(data) {
        return http.get(`/category-list`);
    }
    getEditDetails(id){
        return http.get(`/get-category/${id}`);
      }
}
export default new CategoryService();
