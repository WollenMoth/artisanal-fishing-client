<template>
  <div class="list row">
    <div class="col-md-6">
      <h4>Embarcaciones Registradas</h4>
      <ul class="list-group">
        <li
          class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(boat, index) in boats"
          :key="index"
          @click="setActiveBoat(boat, index)"
        >
          {{ boat.name }}
        </li>
      </ul>
    </div>
    <div class="col-md-6">
      <div v-if="currentBoat && currentCaptain && currentCompany">
        <h4>Embarcación</h4>
        <div>
          <br />
          <label><strong>Nombre del capitán:</strong></label>
          {{ currentCaptain.name }}<br />
          <label><strong>Nombre de la embarcación:</strong></label>
          {{ currentBoat.name }}<br />
          <label><strong>Nombre de la compañia:</strong></label>
          {{ currentCompany.name }}<br />
          <label><strong>Fecha de pesca:</strong></label>
          {{ currentBoat.fishingDate }}<br />
          <label><strong>Locación:</strong></label>
          {{ currentBoat.fishingLocation }}<br />
          <label><strong>Lugar de zarpe:</strong></label>
          {{ currentBoat.zarpe }}<br />
          <label><strong>Captura:</strong></label>
          {{ currentBoat.capture }}<br />
        </div>
        <router-link :to="'/boats/' + currentBoat.id" class="btn btn-info">
          Editar</router-link
        >
      </div>
      <div v-else>
        <br />
        <p>Selecciona una embarcación.</p>
        <router-link to="/add-boat" class="btn btn-info"
          >Agregar embarcación</router-link
        >
      </div>
    </div>
  </div>
</template>
<script>
import BoatService from "../services/BoatService.js";
import CaptainService from "../services/CaptainService.js";
import CompanyService from "../services/CompanyService.js";

export default {
  name: "boats-List",
  data() {
    return {
      tutorials: [],
      boats: [],
      currentTutorial: null,
      currentBoat: null,
      currentCaptain: null,
      currentCompany: null,
      currentIndex: -1,
      title: "",
      BoatId: "",
    };
  },
  methods: {
    getAllBoats() {
      BoatService.getAll()
        .then((response) => {
          this.boats = response.data;
        })
        .catch((e) => {
          console.log(e);
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
    getCompany(id) {
      CompanyService.get(id)
        .then((response) => {
          this.currentCompany = response.data;
        })
        .catch((e) => {
          this.error = e.response.data.message;
        });
    },
    setActiveBoat(boat, index) {
      this.currentBoat = boat;
      this.currentIndex = boat ? index : -1;
      this.getCaptain(boat.idCaptain);
      this.getCompany(boat.idCompany);
    },
  },
  mounted() {
    this.getAllBoats();
  },
};
</script>
