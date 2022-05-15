<template>
  <div class="list row">
    <div class="col-md-6">
      <h4>Compañias registradas</h4>
      <ul class="list-group">
        <li
          class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(companie, index) in companies"
          :key="index"
          @click="setActiveCompanie(companie, index)"
        >
          {{ companie.name }}
        </li>
      </ul>
    </div>
    <div class="col-md-6">
      <div v-if="currentCompanie">
        <h4>Compañia</h4>
        <div>
          <br /><label><strong>Nombre:</strong></label>
          {{ currentCompanie.name }}
        </div>
        <router-link
          :to="'/companies/' + currentCompanie.id"
          class="btn btn-info"
        >
          Editar</router-link
        >
      </div>
      <div v-else>
        <br />
        <p>Selecciona una Compañia.</p>
        <router-link to="/add-companie" class="btn btn-info"
          >Agregar Compañia</router-link
        >
      </div>
    </div>
  </div>
</template>
<script>
import CompanieService from "../services/CompanieService";

export default {
  name: "companies-list",
  data() {
    return {
      tutorials: [],
      companies: [],
      currentTutorial: null,
      currentCompanie: null,
      currentIndex: -1,
      title: "",
      companieId: "",
    };
  },
  methods: {
    getAllCompanies() {
      CompanieService.getAll()
        .then((response) => {
          this.companies = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    setActiveCompanie(companie, index) {
      this.currentCompanie = companie;
      this.currentIndex = companie ? index : -1;
    },
  },
  mounted() {
    this.getAllCompanies();
  },
};
</script>
