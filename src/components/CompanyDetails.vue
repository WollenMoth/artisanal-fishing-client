<template>
  <h4>Compañias</h4>
  <div v-if="currentCompany" class="edit-form">
    <form>
      <div class="form-group">
        <label for="title">Nombre</label>
        <input
          type="text"
          class="form-control"
          id="title"
          v-model="currentCompany.name"
        />
      </div>
    </form>
    <button class="btn btn-danger mr-2" @click="deleteCompany">
      Eliminar Compañia
    </button>
    <button type="submit" class="btn btn-info mr-2" @click="updateCompany">
      Actualizar
    </button>
    <div v-if="message" class="alert alert-success mt-3" role="alert">
      {{ message }}
    </div>
    <div v-if="error" class="alert alert-danger mt-3" role="alert">
      {{ error }}
    </div>
  </div>
  <div v-else>
    <br />
    <p>Selecciona una Compañia.</p>
  </div>
</template>
<script>
import CompanyService from "../services/CompanyService";
export default {
  name: "company-details",
  data() {
    return {
      currentCompany: null,
      message: "",
      error: "",
    };
  },
  methods: {
    getCompany(id) {
      CompanyService.get(id)
        .then((response) => {
          this.currentCompany = response.data;
        })
        .catch((e) => {
          this.error = e.response.data.message;
        });
    },
    deleteCompany() {
      CompanyService.delete(this.currentCompany.id)
        .then((response) => {
          console.log(response.data);
          this.$router.push({ name: "companies" });
        })
        .catch((e) => {
          this.error = e.response.data.message;
        });
    },
    updateCompany() {
      CompanyService.update(this.currentCompany.id, this.currentCompany)
        .then((response) => {
          console.log(response.data);
          this.message = "Se actualizó correctamente";
        })
        .catch((e) => {
          this.error = e.response.data.message;
        });
    },
  },
  mounted() {
    this.message = "";
    this.error = "";
    this.getCompany(this.$route.params.id);
  },
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
