import http from "../http-common";

class BoatService {
  getAll() {
    return http.get("/api/v1/boats");
  }
  get(id) {
    return http.get(`/api/v1/boats/${id}`);
  }
  create(data) {
    return http.post("/api/v1/boats", data);
  }
  update(id, data) {
    return http.put(`/api/v1/boats/${id}`, data);
  }
  delete(id) {
    return http.delete(`/api/v1/boats/${id}`);
  }
}

export default new BoatService();
