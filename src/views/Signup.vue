<template>
  <div class="signup">
    <div class="container">


      <!-- login page -->
      <section class="section bg-login-form home-height-full">
          <!-- <div class="bg-overlay"></div> -->
          <div class="home-center">
              <div class="home-desc-center">
                  <div class="container">
                      <div class="row justify-content-center">
                          <div class="col-lg-6">
                              <form class="intro-form rounded bg-white p-4" v-on:submit.prevent="submit()">
                                  <h5 class="text-center pb-3 font-weight-bold"> Register for a Sleep Coach Account </h5>

                                  <ul>
                                    <li class="text-danger" v-for="error in errors">{{ error }}</li>
                                  </ul>

                                  <div class="form-group">
                                      <label class="">Full Name</label>
                                      <input type="text" class="form-control" placeholder="ex: Michael Zenaty" required="required" v-model="name">
                                  </div>

                                  <div class="form-group">
                                      <label class="">E-mail Address</label>
                                      <input type="email" class="form-control" placeholder="ex: John@doe.com" required="required" v-model="email">
                                  </div>

                                  <div class="form-group">
                                      <label class="">Password</label>
                                      <input type="password" class="form-control" placeholder="Password" required="required" v-model="password">
                                  </div>

                                  <div class="form-group">
                                      <label class="">Password Confirmation</label>
                                      <input type="password" class="form-control" placeholder="Password" required="required" v-model="passwordConfirmation">
                                  </div>

                                  <div class="custom-control custom-checkbox my-1 mr-sm-2">
                                      <input type="checkbox" class="custom-control-input" id="customControlInline" checked="">
                                      <label class="custom-control-label" for="customControlInline">I accept <a href="#" class="text-dark">terms and condition</a></label>
                                  </div>

                                  <div class="form-group text-center pt-4 mb-0">
                                      <input type="submit" class="btn btn-custom btn-block text-uppercase" value="Register"></button>
                                  </div>
                              </form>
                          </div>
                      </div>

                      <div class="row">
                          <div class="col-lg-12 text-center">
                              <p class="pt-5 text-white">Already have an account? <a href="login.html" class="ml-1"><b class="text-white">Sign In</b></a></p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
            name: "",
            email: "",
            password: "",
            passwordConfirmation: "",
            errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.passwordConfirmation
      };
      axios.post("/api/users", params)
        .then(response => {
          this.$router.push("/login");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>