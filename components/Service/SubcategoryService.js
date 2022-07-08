import http from "../config/DataService";
class SubcategoryService {

    getSubCategoryList() {
        return http.get(`/get-all-sub-category`);
    }
    saveSubCategory(data) {
        return http.post(`/add-sub-category`, data);
    }

    getEditSubCategory(id) {
        return http.get(`/get-sub-category/${id}`);
    }

    updateCategory(data) {
        return http.post(`/update-category`, data);
    }

    deleteCategory(id) {
        return http.post(`/delete-category/`, { id: id, });
    }

}
export default new SubcategoryService();
