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
          v-model="company.name"
          name="title"
        />
      </div>
      <button @click="saveCompany" class="btn btn-success">Agregar</button>
    </div>
    <div v-else>
      <h4>Compañia creada exitosamente.</h4>
      <button class="btn btn-success" @click="newCompany">Add</button>
    </div>
  </div>
</template>

<script>
import CompanyService from "../services/CompanyService";
export default {
  name: "add-company",
  data() {
    return {
      company: {
        id: null,
        name: "",
      },
      submitted: false,
    };
  },
  methods: {
    saveCompany() {
      var data = {
        name: this.company.name,
      };
      CompanyService.create(data)
        .then((response) => {
          this.company.id = response.data.id;
          this.submitted = true;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    newCompany() {
      this.submitted = false;
      this.company = {};
    },
  },
};
</script>
