<template>
  <h4>Capitán</h4>
  <div
    v-if="currentBoat && currentCompanie && currentCaptain"
    class="edit-form"
  >
    <form>
      <div class="form-group">
        <label for="title">Nombre de la embarcación</label>
        <input
          type="text"
          class="form-control"
          id="title"
          v-model="currentBoat.name"
        />
      </div>
      <div class="form-group">
        <label for="title">Nombre del capitan</label>
        <input
          type="text"
          disabled
          class="form-control"
          id="title"
          v-model="currentCaptain.name"
        />
      </div>
      <div class="form-group">
        <label for="title">Nombre de la compañia</label>
        <input
          type="text"
          disabled
          class="form-control"
          id="title"
          v-model="currentCompanie.name"
        />
      </div>
      <div class="form-group">
        <label for="title">Locación:</label>
        <input
          type="text"
          disabled
          class="form-control"
          id="title"
          v-model="currentBoat.fishingLocation"
        />
      </div>
      <div class="form-group">
        <label for="title">Lugar de zarpe:</label>
        <input
          type="text"
          class="form-control"
          id="title"
          v-model="currentBoat.zarpe"
        />
      </div>
      <div class="form-group">
        <label for="title">¿Qué especies captura?</label>
        <input
          type="text"
          class="form-control"
          id="title"
          v-model="currentBoat.capture"
        />
      </div>
    </form>
    <button class="btn btn-danger mr-2" @click="deleteBoat">
      Eliminar embarcación
    </button>
    <button type="submit" class="btn btn-info mr-2" @click="updateBoat">
      Actualizar
    </button>
    <p>{{ message }}</p>
    <div v-if="error" class="alert alert-danger" role="alert">
      {{ error }}
    </div>
  </div>
  <div v-else>
    <br />
    <p>Selecciona una embarcación.</p>
  </div>
</template>
<script>
import BoatService from '../services/BoatService.js';
import CaptainService from '../services/CaptainService.js';
import CompanieService from '../services/CompanieService.js';

export default {
  name: 'boat',
  data() {
    return {
      currentBoat: null,
      currentCaptain: null,
      currentCompanie: null,
      message: '',
      error: '',
    };
  },
  methods: {
    getBoat(id) {
      BoatService.get(id)
        .then((response) => {
          this.currentBoat = response.data;
        })
        .catch((e) => {
          this.error = e.response.data.message;
        });
    },
    deleteBoat() {
      BoatService.delete(this.currentBoat.id)
        .then((response) => {
          console.log(response.data);
          this.$router.push({ name: 'boats' });
        })
        .catch((e) => {
          this.error = e.response.data.message;
        });
    },
    updateBoat() {
      BoatService.update(this.currentBoat.id, this.currentBoat)
        .then((response) => {
          console.log(response.data);
          this.message = 'Se actualizó correctamente';
        })
        .catch((e) => {
          this.error = e.response.data.message;
        });
    },
    getCaptain(id) {
      CaptainService.get(id)
        .then((response) => {
          this.currentCaptain = response.data;
        })
        .catch((e) => {
          this.error = e.response.data.message;
        });
    },
    getCompanie(id) {
      CompanieService.get(id)
        .then((response) => {
          this.currentCompanie = response.data;
        })
        .catch((e) => {
          this.error = e.response.data.message;
        });
    },
  },
  mounted() {
    this.message = '';
    this.error = '';
    this.getBoat(this.$route.params.id);
    this.getCaptain(this.$route.params.id);
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
