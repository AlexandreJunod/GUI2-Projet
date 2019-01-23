<template>
  <div id="app" class="container">
  <h1 class="mb-4">Un petit quiz, theme : {{ title }}</h1>
  <b-alert v-if="fin" show>Votre score est : {{ score }} / {{ questions.length }}</b-alert>
    <b-alert show>Créer par {{ created_by }}</b-alert>
    <b-card :header="questions[id].question"
            header-tag="header">
      <b-list-group>
        <b-list-group-item
          button
          v-for="(item, id) in questions[id].answers"
          :key="item.id"
          @click="action(id, item.value)">
          {{ item.name }}
        </b-list-group-item>
      </b-list-group>
      <b-button v-if="fin" @click="recommencer" class="mt-4">Recommencer !</b-button>
  </b-card>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: function () {
    return {
      fin: false,
      id: 0,
      score: 0,
      index: "5c3f45e155a8180004b47aea",
      title: "Quizz Géométrie",
      description: "Questions sur les formes et volumes",
      created_by: "amr",
      questions: [
        {
            id:"5c3f0c696f912a0004c01251",
            question:"Combien de côtés possède un cube",
            image:"test.png",
            answers:[{
                name:"Six",
                value:false
            },
            {
                name:"Quatre",
                value:true
            }]
        },
        {
            id:"5c3f0c696f912a0004c012324",
            question:"Combien de côtés possède un triangle",
            image:"test.png",
            answers:[{
                name:"Deux",
                value:false
            },
            {
                name:"Trois",
                value:true
            }]
        },
        {
            id:"5c3f0c696f912a0004c012324",
            question:"Combien de côtés possède un cercle",
            image:"test.png",
            answers:[{
                name:"Un",
                value:false
            },
            {
                name:"Zéro",
                value:true
            }]
        },
      ]
    }
  },
  methods: {
    action: function(id, value) {
        if(value && this.questions.length > this.score)
        {
            this.score++;
        }

      if(this.id == this.questions.length - 1) {
        this.fin = true;
      } else {
        this.id++;
      }
  },
    recommencer: function() {
        this.fin = this.id = this.score = 0;
    }
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
