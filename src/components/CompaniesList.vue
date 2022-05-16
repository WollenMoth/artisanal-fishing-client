<template>
  <div class="list row">
    <div class="col-md-6">
      <h4>Compañias registradas</h4>
      <ul class="list-group">
        <li
          class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(company, index) in companies"
          :key="index"
          @click="setActiveCompany(company, index)"
        >
          {{ company.name }}
        </li>
      </ul>
    </div>
    <div class="col-md-6">
      <div v-if="currentCompany">
        <h4>Compañia</h4>
        <div>
          <br /><label><strong>Nombre:</strong></label>
          {{ currentCompany.name }}
        </div>
        <router-link
          :to="'/companies/' + currentCompany.id"
          class="btn btn-info"
        >
          Editar</router-link
        >
      </div>
      <div v-else>
        <br />
        <p>Selecciona una Compañia.</p>
        <router-link to="/add-company" class="btn btn-info"
          >Agregar Compañia</router-link
        >
      </div>
    </div>
  </div>
</template>
<script>
import CompanyService from "../services/CompanyService";

export default {
  name: "companies-list",
  data() {
    return {
      tutorials: [],
      companies: [],
      currentTutorial: null,
      currentCompany: null,
      currentIndex: -1,
      title: "",
      companyId: "",
    };
  },
  methods: {
    getAllCompanies() {
      CompanyService.getAll()
        .then((response) => {
          this.companies = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    setActiveCompany(company, index) {
      this.currentCompany = company;
      this.currentIndex = company ? index : -1;
    },
  },
  mounted() {
    this.getAllCompanies();
  },
};
</script>
