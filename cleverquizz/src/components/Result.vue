<template>
  <div index="app" class="container">
    <h1 class="mb-4">Résultats</h1>
    <b-alert
      show
    >Votre score est de : {{ this.$route.params.score }} / {{ this.$route.params.length }} questions correctes</b-alert>
    <b-alert show>Votre pourcentage est de : <div id="perc">{{ this.$route.params.perc }} %</div></b-alert>

    <b-button v-on:click="submit()">Revenir à la liste des Quiz</b-button>
  </div>
</template>

<script>
import JQuery from 'jquery'
let $ = JQuery
export default {
  name: "Result",
  methods: {
    submit: function() {
      //var perc = localStorage.getItem($("#perc").text());
      var perc = localStorage.setItem('', this.$route.params.perc)
      console.log(perc)
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss" scoped>
</style>

