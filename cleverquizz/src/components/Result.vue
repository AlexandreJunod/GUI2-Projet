<template>
  <div index="app" class="container">
  <h1 class="mb-4">Testing</h1>
  <b-alert show>Votre score est de : {{ this.$route.params.score }} / {{ this.$route.params.length }} questions correctes</b-alert>
  <b-alert show>Votre pourcentage est de : {{ this.$route.params.perc }} %</b-alert>

  <b-button v-on:click="submit()">Revenir à la liste des Quiz</b-button>

  </div>
</template>

<script>
export default {
        name: "Result",
        methods: {
            submit: function () {
              this.$router.push('/')
            }
        },
}
</script>

<style>

</style>
