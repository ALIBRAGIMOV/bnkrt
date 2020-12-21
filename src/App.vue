<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/charts">Charts</router-link> |
      <router-link to="/forms">Forms</router-link> |
      <router-link to="/table">EditTable</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app',
  data: () => ({
    info: null
  })
}
</script>

<style>
#app {
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
body {
  font-family: monospace, Helvetica, Arial, sans-serif;;
  line-height: 1.6;
}
</style>
