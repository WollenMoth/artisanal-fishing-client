<template>
  <h4>Compañias</h4>
  <div v-if="currentCompanie" class="edit-form">
    <form>
      <div class="form-group">
        <label for="title">Nombre</label>
        <input
          type="text"
          class="form-control"
          id="title"
          v-model="currentCompanie.name"
        />
      </div>
    </form>
    <button class="btn btn-danger mr-2" @click="deleteCompanie">
      Eliminar Compañia
    </button>
    <button type="submit" class="btn btn-info mr-2" @click="updateCompanie">
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
import CompanieService from "../services/CompanieService";
export default {
  name: "companie",
  data() {
    return {
      currentCompanie: null,
      message: "",
      error: "",
    };
  },
  methods: {
    getCompanie(id) {
      CompanieService.get(id)
        .then((response) => {
          this.currentCompanie = response.data;
        })
        .catch((e) => {
          this.error = e.response.data.message;
        });
    },
    deleteCompanie() {
      CompanieService.delete(this.currentCompanie.id)
        .then((response) => {
          console.log(response.data);
          this.$router.push({ name: "companies" });
        })
        .catch((e) => {
          this.error = e.response.data.message;
        });
    },
    updateCompanie() {
      CompanieService.update(this.currentCompanie.id, this.currentCompanie)
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
    this.getCompanie(this.$route.params.id);
  },
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
