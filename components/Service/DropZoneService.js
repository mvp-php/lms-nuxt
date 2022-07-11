import http from "../config/DataService";
class DropZoneService {
    testDropzone(data) {
        return http.post(`/dropzone-image-upload/`, data);
    }
}
export default new DropZoneService();
