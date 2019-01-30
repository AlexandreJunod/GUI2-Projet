<template>
  <div id="app">
    <listQuiz></listQuiz>
  </div>
</template>

<script>
import listQuiz from "./components/listQuiz"

export default {
  name: 'App',
  components: {
    listQuiz
  }
}
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
