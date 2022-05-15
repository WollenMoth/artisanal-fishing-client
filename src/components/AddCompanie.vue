<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <h3>Nueva Compañia</h3>
      <div class="form-group">
        <label for="title">Nombre </label>
        <input
          type="text"
          class="form-control"
          id="title"
          required
          v-model="companie.name"
          name="title"
        />
      </div>
      <button @click="saveCompanie" class="btn btn-success">Agregar</button>
    </div>
    <div v-else>
      <h4>Compañia creada exitosamente.</h4>
      <button class="btn btn-success" @click="newCompanie">Add</button>
    </div>
  </div>
</template>

<script>
import CompanieService from "../services/CompanieService";
export default {
  name: "add-companie",
  data() {
    return {
      companie: {
        id: null,
        name: "",
      },
      submitted: false,
    };
  },
  methods: {
    saveCompanie() {
      var data = {
        name: this.companie.name,
      };
      CompanieService.create(data)
        .then((response) => {
          this.companie.id = response.data.id;
          this.submitted = true;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    newCompanie() {
      this.submitted = false;
      this.companie = {};
    },
  },
};
</script>
