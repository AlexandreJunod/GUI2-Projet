<template>
  <div class="container">
    <h1 class="mb-4">Un petit quiz, theme {{questions.title}}:</h1>
    <b-alert show>Créer par {{questions.created_by}}</b-alert>
    <b-card :header="answers[index].question" header-tag="header">
      <b-list-group>
        <b-list-group-item
          button
          class="select"
          v-for="(item, index) in answers[index].answers"
          :id="item.value"
          :key="item.index"
          @click="action(item.value)"
        >{{ item.name }}</b-list-group-item>
      </b-list-group>
      <b-button @click="previous" class="mt-4" v-if="index > 0">Précédent</b-button>
      <b-button @click="terminer" class="mt-4" v-if="index == answers.length - 1">Terminer</b-button>
      <b-button @click="next" class="mt-4" v-else>Suivant</b-button>
    </b-card>
  </div>
</template>

<script>
import Vue from "Vue";
import axios from "axios";
import VueAxios from "vue-axios";
export default {
  name: "Questions",
  data: function() {
    return {
      fin: false,
      index: 0,
      score: 0,
      perc: null,
      questions: [],
      answers: []
    };
  },
  mounted: function() {
      this.fetchData();
    },
  methods: {
    action: function(value) {
      if (value && this.answers.length > this.score) {
        this.score++;
      } 
      
    },
    recommencer: function() {
      this.fin = this.index = this.score = 0;
    },
    fetchData() {
      axios
        .get(
          "http://awa-quizz.herokuapp.com/api/quizzes/" + this.$route.params.id,
          {
            headers: {
              "quizz-token":
                "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6Imd1ZXN0IiwicGFzc3dvcmQiOiIkcGJrZGYyLXNoYTI1NiQyMDAwMCRjNjRWd3RnN0IuQThKeVJrN1AzL1h3JG9BRDloUnVEQTVkWVpKR1Y2cDNpdDBzYVFqdlFBemFZbi9wNW1kSGRDbDQifQ.P-KfTO8nq5oQNC_bIAY5VKOeNLyNbGE-gGrf0oIKQjc"
            }
          }
        )
        .then(response => {
          this.questions = response.data;
          this.answers = response.data.questions;
        })
        .catch(error => {
          console.log(error.response);
        });
    },
    

    next: function() {
        this.index++;
    },
    terminer: function (){
        this.perc = ((this.score / this.answers.length)*100).toFixed(0);
        this.$router.push({
          name: "Result", params: {score : this.score, length: this.answers.length, perc: this.perc}
        });
    },
    previous: function() {
      if (this.index > 0) {
        this.index--;
      }
    }
  }
};
</script>

<style>
.select:hover {
  background-color: #dfdfdf;
  cursor: pointer;
}

.right {
  color: white;
  background-color: #04dcaf;
  border-color: #00a885;
}

.wrong {
  color: white;
  background-color: #f48080;
  border-color: #f26060;
}
</style>
