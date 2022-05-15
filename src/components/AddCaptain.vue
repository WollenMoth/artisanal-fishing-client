<template>
  <div class="submit-form">
    <div v-if="!submitted">
    <h3>Nuevo Capitán</h3>
      <div class="form-group">
        <label for="title">Nombre </label>
        <input
          type="text"
          class="form-control"
          id="title"
          required
          v-model="captain.name"
          name="title"
        />
      </div>
      <div class="form-group">
        <label for="title">Email</label>
        <input
          type="text"
          class="form-control"
          id="email"
          required
          v-model="captain.email"
          name="email"
        />
      </div>
      <div class="form-group">
        <label for="title">País</label>
        <input
          type="text"
          class="form-control"
          id="country"
          required
          v-model="captain.country"
          name="country"
        />
      </div>
      <div class="form-group">
        <label for="title">Estado</label>
        <input
          type="text"
          class="form-control"
          id="state"
          required
          v-model="captain.state"
          name="state"
        />
      </div>
      <button @click="saveCaptain" class="btn btn-success">Agregar</button>
    </div>
    <div v-else>
      <h4> Capitán creado exitosamente. </h4>
      <button class="btn btn-success" @click="newCaptain">Add</button>
    </div>
  </div>
</template>

<script>
import CaptainService from "../services/CaptainService";
export default {
  name: "add-captain",
  data() {
    return {
      captain: {
        id: null,
        name: "",
        username: "",
        country: "",
        state:""
      },
      submitted: false
    };
  },
  methods: {
    saveCaptain() {
      var data = {
        name: this.captain.name,
        email: this.captain.email,
        country: this.captain.country,
        state: this.captain.state
      };
      CaptainService.create(data)
        .then(response => {
          this.captain.id = response.data.id;
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    newCaptain() {
      this.submitted = false;
      this.captain = {};
    }
  }
};
</script>
