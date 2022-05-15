<template>
  <div class="list row">
    <div class="col-md-6">
      <h4>Capitanes registrados</h4>
      <ul class="list-group">
        <li
          class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(captain, index) in captains"
          :key="index"
          @click="setActiveCaptain(captain, index)"
        >
          {{ captain.name }}
        </li>
      </ul>
    </div>
    <div class="col-md-6">
      <div v-if="currentCaptain">
        <h4>Capitán</h4>
        <div>
          <br /><label><strong>Nombre:</strong></label>
          {{ currentCaptain.name }} <br /><label><strong>Email:</strong></label>
          {{ currentCaptain.email }} <br /><label><strong>País:</strong></label>
          {{ currentCaptain.country }} <br /><label
            ><strong>Estado:</strong></label
          >
          {{ currentCaptain.state }}
        </div>
        <router-link
          :to="'/captains/' + currentCaptain.id"
          class="btn btn-info"
        >
          Editar</router-link
        >
      </div>
      <div v-else>
        <br />
        <p>Selecciona un Capitán.</p>
        <router-link to="/add-captain" class="btn btn-info"
          >Agregar Capitan</router-link
        >
      </div>
    </div>
  </div>
</template>
<script>
import CaptainService from "../services/CaptainService";

export default {
  name: "captain-list",
  data() {
    return {
      tutorials: [],
      captains: [],
      currentTutorial: null,
      currentCaptain: null,
      currentIndex: -1,
      title: "",
      captainId: "",
    };
  },
  methods: {
    getAllCaptains() {
      CaptainService.getAll()
        .then((response) => {
          this.captains = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    setActiveCaptain(captain, index) {
      this.currentCaptain = captain;
      this.currentIndex = captain ? index : -1;
    },
  },
  mounted() {
    this.getAllCaptains();
  },
};
</script>
