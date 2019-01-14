<template>
  <div>
    <strong>Question {{ questionNumber }}:</strong>
    <br>
    <strong>{{ question.text }}</strong>

    <div v-if="question.type === 'tf'">
      <input type="radio" name="currentQuestion" id="trueAnswer" v-model="answer" value="t">
      <label for="trueAnswer">True</label>
      <br>
      <input type="radio" name="currentQuestion" id="falseAnswer" v-model="answer" value="f">
      <label for="falseAnswer">False</label>
      <br>
    </div>

    <div v-if="question.type === 'mc'">
      <div v-for="(mcanswer,index) in question.answers" :key="mcanswer.id">
        <input
          type="radio"
          :id="'answer'+index"
          name="currentQuestion"
          v-model="answer"
          :value="mcanswer"
        >
        <label :for="'answer'+index">{{mcanswer}}</label>
        <br>
      </div>
    </div>

    <button @click="submitAnswer">Answer</button>
  </div>
</template>

<script>
export default {
    name: "question",
  data() {
    return {
      answer: ""
    };
  },
  props: ["question", "question-number"],
  methods: {
    submitAnswer: function() {
      this.$emit("answer", { answer: this.answer });
      this.answer = null;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
