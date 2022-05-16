<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <h3>Nuevo Embarcación</h3>
      <div class="form-group">
        <label for="name">Nombre</label>
        <input
          type="text"
          class="form-control"
          id="name"
          required
          v-model="boat.name"
          name="name"
        />
      </div>
      <div class="form-group">
        <label for="fishingLocation">Lugar de Pesca</label>
        <input
          type="text"
          class="form-control"
          id="fishingLocation"
          required
          v-model="boat.fishingLocation"
          name="fishingLocation"
        />
      </div>
      <div class="form-group">
        <label for="capture">Captura</label>
        <input
          type="text"
          class="form-control"
          id="capture"
          required
          v-model="boat.capture"
          name="capture"
        />
      </div>
      <div class="form-group">
        <label for="zarpe">Zarpe</label>
        <input
          type="text"
          class="form-control"
          id="zarpe"
          required
          v-model="boat.zarpe"
          name="zarpe"
        />
      </div>
      <div class="form-group">
        <label>Capitán</label>
        <select
          v-model="boat.idCaptain"
          class="form-control"
          aria-label="Selecciona un capitán"
        >
          <option value="">Selecciona un capitán</option>
          <option
            v-for="captain in captains"
            :value="captain.id"
            :key="captain.id"
          >
            {{ captain.name }}
          </option>
        </select>
      </div>
      <div class="form-group">
        <label>Empresa</label>
        <select
          v-model="boat.idCompany"
          class="form-control"
          aria-label="Selecciona una empresa"
        >
          <option value="">Selecciona una empresa</option>
          <option
            v-for="company in companies"
            :value="company.id"
            :key="company.id"
          >
            {{ company.name }}
          </option>
        </select>
      </div>
      <button @click="saveBoat" class="btn btn-success">Agregar</button>
    </div>
    <div v-else>
      <h4>Embarcación creada exitosamente.</h4>
      <button class="btn btn-success" @click="newBoat">Add</button>
    </div>
  </div>
</template>

<script>
import BoatService from "../services/BoatService";
import CaptainService from "../services/CaptainService";
import CompanyService from "../services/CompanyService";
export default {
  name: "add-boat",
  data() {
    return {
      boat: {
        id: null,
        name: "",
        fishingLocation: "",
        capture: "",
        zarpe: "",
        idCaptain: "",
        idCompany: "",
      },
      captains: [],
      companies: [],
      submitted: false,
    };
  },
  methods: {
    saveBoat() {
      var data = {
        name: this.boat.name,
        fishingLocation: this.boat.fishingLocation,
        capture: this.boat.capture,
        zarpe: this.boat.zarpe,
        idCaptain: this.boat.idCaptain,
        idCompany: this.boat.idCompany,
      };
      BoatService.create(data)
        .then((response) => {
          this.boat.id = response.data.id;
          this.submitted = true;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    newBoat() {
      this.submitted = false;
      this.boat = {};
    },
    getCaptains() {
      CaptainService.getAll()
        .then((response) => {
          this.captains = response.data;
        })
        .catch((e) => {
          this.error = console.log(e);
        });
    },
    getCompanies() {
      CompanyService.getAll()
        .then((response) => {
          this.companies = response.data;
        })
        .catch((e) => {
          this.error = console.log(e);
        });
    },
  },
  mounted() {
    this.getCaptains();
    this.getCompanies();
  },
};
</script>
