<template>
  <div id="nav">
    <Top />
    <div class="content">
      <router-view />
    </div>
    <Bottom />
  </div>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>-->
</template>
<script>
import Top from "./components/top.vue";
import Bottom from "./components/bottom.vue";
import "./style/common.css";
export default {
  name: "App",
  components: {
    Top,
    Bottom
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2e3133; */
  color: #8D8E8F;
}

#nav {
  height: 100vh;
}
.content {
  min-height: calc(100vh - 260px);
}

/* #nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
