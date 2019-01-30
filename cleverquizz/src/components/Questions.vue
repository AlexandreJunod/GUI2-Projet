<template>
  <div index="app" class="container">
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
export default {
  name: 'Questions',
  data: function () {
    return {
      fin: false,
      index: 0,
      score: 0,
      id: "5c3f45e155a8180004b47aea",
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
