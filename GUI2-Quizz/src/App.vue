<template>
  <div id="quiz">
  
  <quiz url="https://api.myjson.com/bins/ahn1p"></quiz>
 
</div>

</template>

<script>
import Quiz from './components/quiz'

export default {
  name: 'App',
  components:{
    Quiz
  }
}
</script>

<style>
#quizz {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
