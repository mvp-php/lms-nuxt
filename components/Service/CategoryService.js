import http from "../config/DataService";
import authHeader from '../config/AuthHeader';
class CategoryService {
    addCategory(data) {
        return http.post(`/category-save`, data, { headers: authHeader() });
    }
    getCategoryList(data,currentPage) {
        return http.get(`/category-list?page=`+currentPage+`&search=`+data, { headers: authHeader() });
    }
    getEditDetails(id) {
        return http.get(`/get-category/${id}`, { headers: authHeader() });
    }
    updateCategory(data) {
        return http.post(`/update-category`, data, { headers: authHeader() });
    }
    deleteCategory(id) {
        return http.post(`/delete-category`, {id: id,}, { headers: authHeader() });
    }
    bulkCategoryDelete(bulkId){
        return http.post(`/category-bulk-delete/`,{id: bulkId,},{ headers: authHeader() });
    }

    getCategoryListNew(){
        return http.get(`/category-sub-list/`,{ headers: authHeader() });
    }
}
export default new CategoryService();
