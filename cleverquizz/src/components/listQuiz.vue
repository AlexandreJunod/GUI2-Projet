<template>
    <div>
    <div class="row">
        <div class="quizzitem col-sm-12 col-md-6 col-lg-3" v-for="(value) in quizzes" :key="value.key">
            <div class="title">{{value.title}}</div>
            <router-link :to="{ name: 'Questions', params: { id: value.id } }">
                <div class="circle" v-bind:style="{ 'background-image': 'url('+value.image+')'}"></div>
            </router-link>
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
    export default {
        name: "app",
        data: function() {
            return {
                quizzes: [
                {
                    title: "Quizz Géométrie",
                    image: "https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2018/03/01075158/p2.png",
                    description: "Questions sur les formes et volumes",
                    created_by: {
                        id: "5c3ef507ae97ab0004daad7c",
                        username: "amr"
                    },
                    number_participants: 0,
                    id: "5c3f45e155a8180004b47aea"
                },
                {
                    title: "Quizz Web Bases",
                    image: "http://managedsolution.com/wp-content/uploads/2015/12/web-development-managed-solution.jpg",
                    description: "Questions de base sur le développement web",
                    created_by: {
                        id: "5c3ef507ae97ab0004daad7c",
                        username: "amr"
                    },
                    number_participants: 2,
                    id: "5c4592fb28a39b00045f1945"
                }
            ]
            }

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
        margin-bottom: 50px;
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