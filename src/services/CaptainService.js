import http from "../http-common";

class CaptainService {
  getAll() {
    return http.get("/api/v1/captains");
  }
  get(id) {
    return http.get(`/api/v1/captains/${id}`);
  }
  create(data) {
    return http.post("/api/v1/captains", data);
  }
  update(id, data) {
    return http.put(`/api/v1/captains/${id}`, data);
  }
  delete(id) {
    return http.delete(`/api/v1/captains/${id}`);
  }
}

export default new CaptainService();
