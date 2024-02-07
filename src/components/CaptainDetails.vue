<template>
  <h4>Capitán</h4>
  <div v-if="currentCaptain" class="edit-form">
    <form>
      <div class="form-group">
        <label for="title">Nombre</label>
        <input
          type="text"
          disabled
          class="form-control"
          id="title"
          v-model="currentCaptain.name"
        />
      </div>
      <div class="form-group">
        <label for="title">Email</label>
        <input
          type="text"
          disabled
          class="form-control"
          id="title"
          v-model="currentCaptain.email"
        />
      </div>
      <div class="form-group">
        <label for="title">Pais</label>
        <input
          type="text"
          class="form-control"
          id="title"
          v-model="currentCaptain.country"
        />
      </div>
      <div class="form-group">
        <label for="title">Estado</label>
        <input
          type="text"
          class="form-control"
          id="title"
          v-model="currentCaptain.state"
        />
      </div>
    </form>
    <button class="btn btn-danger mr-2" @click="deleteCaptain">
      Eliminar Capitán
    </button>
    <button type="submit" class="btn btn-info mr-2" @click="updateCaptain">
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
    <p>Selecciona un Capitán.</p>
  </div>
</template>
<script>
import CaptainService from "../services/CaptainService";
export default {
  name: "captain-details",
  data() {
    return {
      currentCaptain: null,
      message: "",
      error: "",
    };
  },
  methods: {
    getCaptain(id) {
      CaptainService.get(id)
        .then((response) => {
          this.currentCaptain = response.data;
        })
        .catch((e) => {
          this.error = e.response.data.message;
        });
    },
    deleteCaptain() {
      CaptainService.delete(this.currentCaptain.id)
        .then((response) => {
          console.log(response.data);
          this.$router.push({ name: "captains" });
        })
        .catch((e) => {
          this.error = e.response.data.message;
        });
    },
    updateCaptain() {
      CaptainService.update(this.currentCaptain.id, this.currentCaptain)
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
    this.getCaptain(this.$route.params.id);
  },
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
