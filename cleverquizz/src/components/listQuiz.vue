<template>
    <div id="listQuiz" v-cloak>
    <div class="row">
        <div class="quizzitem col-sm-12 col-md-6 col-lg-3" v-for="value in quizzes" :key="value.id">
            <h1 class="title">{{value.title}}</h1>
                <div v-on:click="goQuestions(value.id)" class="circle" v-bind:style="{ 'background-image': 'url('+value.image+')'}"></div>

            <div class="labelitem">{{value.description}}</div>
            <div class="progressbar">
                <div class="progressbarresult" style='width:50%'></div>
                <div class="progressbarlabel">50%</div>
            </div>
            </div>
    </div>

    </div>
</template>

<script>
    import Vue from 'Vue'
    import axios from 'axios'
    import VueAxios from 'vue-axios'

    Vue.use(VueAxios, axios)
    export default {
        name: "listQuiz",
        data: function(){
            return {
                quizzes: []
            }
            
        },
        methods: {
        fetchData () {
              axios.get('http://awa-quizz.herokuapp.com/api/quizzes', {
                  headers: { 'quizz-token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6Imd1ZXN0IiwicGFzc3dvcmQiOiIkcGJrZGYyLXNoYTI1NiQyMDAwMCRjNjRWd3RnN0IuQThKeVJrN1AzL1h3JG9BRDloUnVEQTVkWVpKR1Y2cDNpdDBzYVFqdlFBemFZbi9wNW1kSGRDbDQifQ.P-KfTO8nq5oQNC_bIAY5VKOeNLyNbGE-gGrf0oIKQjc'
                        }
                }).then((response) => {
                        this.quizzes =response.data.quizzes;
              })
          },
          goQuestions : function(index) {
                this.$router.push({name:'Questions',params:{id:index}})
                console.log(index)
            },
  },
  

  mounted() {
    this.fetchData()
  }
}
    
</script>

<style scoped>
    .title {
        font-size: 50px;
        color: #86d2f7;
        text-align: center;
        margin-bottom: 70px;
    }

    .quizzitem {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    .circle {
        border-radius: 100%;
        overflow: hidden;
        max-height: 250px;
        max-width: 250px;
        height: 100%;
        width: 100%;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        margin-bottom: 20px;
        opacity: 0.6;
        transition: 0.3s;
        cursor: pointer;
    }
    .circle:hover {
        opacity: 1;
    }

    .labelitem {
        width: 100%;
        text-align: center;
        margin-bottom: 10px;
        font-size: 20px;
    }

    .progressbar {
        width: 60%;
        border-radius: 25px;
        height: 25px;
        background-color: #fcc64c;
        margin-bottom: 300px;
        position: relative;
    }

    .progressbar .progressbarresult {
        height: 25px;
        border-top-left-radius: 25px;
        border-bottom-left-radius: 25px;
        background-color: #00a885;
        position: absolute;
    }

    .progressbar .progressbarlabel {
        height: 25px;
        width: 100%;
        position: absolute;
        text-align: center;
        font-weight: bold;
        color: white;
    }
    img{
        text-align: center;
        height: 100%;
    }
    a{
        display:contents;
    }
</style>