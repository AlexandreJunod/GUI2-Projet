<template>
  <div index="app" class="container">
  <h1 class="mb-4">Testing</h1>
  <b-alert show>Votre score est : {{ $route.params.score }} / {{ $route.params.lenght }}</b-alert>
  </div>
</template>

<script>
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
