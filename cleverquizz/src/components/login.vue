<template>
  <div class="container">
    <h1>Login</h1>
    <b-form @submit="login()">
      <b-form-group
        id="groupUsername"
        label="Username :"
        label-for="username"
        description="We'll never share your username with anyone."
      >
        <b-form-input
          id="inputUsername"
          type="text"
          name="username"
          v-model="input.username"
          required
          placeholder="Username"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="groupPassword" label="Password :">
        <b-form-input
          id="inputPassword"
          type="password"
          v-model="input.password"
          required
          placeholder="Password"
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary" v-on:click="login()">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      input: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    login() {
      if (this.input.username != "" && this.input.password != "") {
        if (
          this.input.username == this.$parent.mockAccount.username &&
          this.input.password == this.$parent.mockAccount.password
        ) {
          this.$emit("authenticated", true);
          this.$router.replace({ name: "secure" });
        } else {
          console.log("The username and / or password is incorrect");
        }
      } else {
        console.log("A username and password must be present");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#login {
  width: 500px;
  border: 1px solid #cccccc;
  background-color: #ffffff;
  margin: auto;
  margin-top: 200px;
  padding: 20px;
}
</style>