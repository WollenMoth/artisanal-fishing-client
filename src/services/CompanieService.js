import http from "../http-common";

class CompanieService {
  getAll() {
    return http.get("/api/v1/companies");
  }
  get(id) {
    return http.get(`/api/v1/companies/${id}`);
  }
  create(data) {
    return http.post("/api/v1/companies", data);
  }
  update(id, data) {
    return http.put(`/api/v1/companies/${id}`, data);
  }
  delete(id) {
    return http.delete(`/api/v1/companies/${id}`);
  }
}

export default new CompanieService();