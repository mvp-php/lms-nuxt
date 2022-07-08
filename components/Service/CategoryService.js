import http from "../config/DataService";
class CategoryService {
    addCategory(data) {
        return http.post(`/category-save`, data);
    }
    getCategoryList(data) {
        return http.get(`/category-list`);
    }
    getEditDetails(id) {
        return http.get(`/get-category/${id}`);
    }
    updateCategory(data) {
        return http.post(`/update-category`, data);
    }
    deleteCategory(id) {
        return http.post(`/delete-category`, {id: id,});
    }
}
export default new CategoryService();
