<template>
  <div index="app" class="container">
    {{this.$route.params.id}}
  <h1 class="mb-4">Un petit quiz, theme : {{ title }}</h1>
    <b-alert show>Créer par {{ created_by }}</b-alert>
    <b-card :header="questions[index].question"
            header-tag="header">
      <b-list-group>
        <b-list-group-item
          button
          class="select"
          v-for="(item, index) in questions[index].answers"
          :id="item.value"
          :key="item.index"
          @click="action(index, item.value)">
          {{ item.name }}
        </b-list-group-item>
      </b-list-group>
      <b-button @click="previous" class="mt-4">Précédent</b-button>
      <b-button @click="next" class="mt-4">Suivant</b-button>
  </b-card>
  </div>
</template>

<script>
    import Vue from 'Vue'
    import axios from 'axios'
    import VueAxios from 'vue-axios'
export default {
  name: 'Questions',
  data: function () {
    return {
      fin: false,
      index: 0,
      score: 0,
      questions: [],
      answers: [],
    }
  },
  methods: {
    action: function(index, value) {
        if(value && this.questions.length > this.score)
        {
            this.score++;
        }

        /*var element = document.getElementById("true");
        element.classList.add("right");*/
        var element = document.getElementById("false");
        element.classList.add("wrong");
    },
    recommencer: function() {
        this.fin = this.index = this.score = 0;
    },
    fetchData () {
              axios.get('http://awa-quizz.herokuapp.com/api/quizzes/'+ this.$route.params.id, {
                  headers: { 'quizz-token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6Imd1ZXN0IiwicGFzc3dvcmQiOiIkcGJrZGYyLXNoYTI1NiQyMDAwMCRjNjRWd3RnN0IuQThKeVJrN1AzL1h3JG9BRDloUnVEQTVkWVpKR1Y2cDNpdDBzYVFqdlFBemFZbi9wNW1kSGRDbDQifQ.P-KfTO8nq5oQNC_bIAY5VKOeNLyNbGE-gGrf0oIKQjc'
                        }
                }).then((response) => {
                        this.questions =response.data.questions;
                        this.answers =response.data.questions.answers;
                        console.log(this.questions)
              })
          }
  },

    next: function() {
        if(this.index == this.questions.length - 1) {
            this.$router.push({path: '/Result/'+this.score+'/'+this.questions.length});
        }
        else
        {
            this.index++;
        }
    },
    previous: function() {
    if(this.index > 0)
    {
        this.index--;
    }
  }
}
</script>

<style>
.select:hover{
    background-color: #dfdfdf;
}

.right{
    color: white;
    background-color: #04dcaf;
    border-color: #00a885;
}

.wrong{
    color: white;
    background-color: #f48080;
    border-color: #f26060;
}
</style>
