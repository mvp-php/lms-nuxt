import http from "../config/DataService";
class DropZoneService {
    testDropzone(data) {
        return http.post(`/test-dropzone/`, data);
    }
}
export default new DropZoneService();
