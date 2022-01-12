<template>
  <div id="app">
    <div id="nav" v-if="!home">
      <router-link to="/">Dashboard</router-link>
    </div>
    <b-container fluid id="body">
      <router-view />
    </b-container>
  </div>
</template>
<script>
export default {
  name: "App",
  computed: {
    home() {
      return this.$route.path === "/";
    },
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
#body {
  margin-top: 2rem;
}
</style>
