<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-light bg-white">
      <router-link to="/" class="navbar-brand">
        <img src="./assets/LogoApp.png" alt="" width="250">
      </router-link>
     
      
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/captains" class="nav-link">Capitanes</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/companies" class="nav-link">Compañias</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/boats" class="nav-link">Embarcaciones</router-link>
        </li>
      </div>
    </nav>
    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>
<script>
export default {
  name: "app"
};
</script>
