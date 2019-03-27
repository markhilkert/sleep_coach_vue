<template>
  <div class="login">
    <div class="container">

      <!-- login page -->
      <section class="bg-login-form home-height-full">
          <!-- <div class="bg-overlay"></div> -->
          <div class="home-center">
              <div class="home-desc-center">
                  <div class="container">
                      <div class="row justify-content-center">
                          <div class="col-lg-6">
                              <form  class="intro-form bg-white p-4 rounded" v-on:submit.prevent="submit()">
                                  <h5 class="text-center pb-3 font-weight-bold"> Sign In </h5>

                                  <ul>
                                    <li class="text-danger" v-for="error in errors">{{ error }}</li>
                                  </ul>

                                  <div class="form-group">
                                      <label class="">E-mail Address</label>
                                      <input type="email" class="form-control" placeholder=" ex: John@doe.com" required="required" v-model="email">
                                  </div>

                                  <div class="form-group">
                                      <label class="">Password</label>
                                      <input type="password" class="form-control" placeholder="Password" required="required" v-model="password">
                                  </div>

                                  <div class="form-group text-center pt-4 mb-0">
                                      <input type="submit" class="btn btn-custom btn-block text-uppercase" value="Login">
                                  </div>
                                  <div class="mx-auto text-center">
                                      <p class="mb-0 mt-4"><router-link to="/signup" class="text-dark">Forgot your password ?</router-link></p>
                                  </div>

                              </form>
                          </div>
                      </div>

                      <div class="row">
                          <div class="col-lg-12 text-center">
                              <p class="pt-5 text-white"><a href="/signup" class="text-light ml-1"><b class="text-white"></b>Create new account?</a></p>
                          </div>
                      </div>

                  </div>
              </div>
          </div>
      </section>
      <!-- login page end -->
    </div>
  </div>
</template>

<style>
h1{
  text-align: center
}
.button_login{
  text-align: center
}
  
</style>

<script>
import axios from "axios";

export default {
  template: "#login-page",
  data: function() {
    return {
      email: "",
      password: "",
      user_id: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        email: this.email,
        password: this.password,
        user_id: this.user_id
      };
      axios.post("/api/sessions", params)
        .then(response => {
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          localStorage.setItem("userId", response.data.user_id);
          localStorage.setItem("loggedIn", true);
          this.$router.push("/");
        })
        .catch(error => {
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
          localStorage.removeItem("loggedIn")
          localStorage.removeItem("userId")
          localStorage.removeItem("jwt")
        });
    }
  }
};
</script>
