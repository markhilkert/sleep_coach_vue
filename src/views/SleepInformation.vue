<template>
  <div class="sleep-information">

    <div class='container'>
    <!-- How do work -->
    <section class="section services-wrapper">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <div class="section-title mx-auto">
                        <h3 class="mb-4">How did you sleep last night?</h3>
                        <p class="text-muted"> [maybe add txt] </p>
                    </div>
                </div>
            </div>

            <div class="col-lg-12">
                <div class="service-boxed bg-white p-4">
                    <i class="mbri-globe service-icon font-weight-bold"></i>
                    <div class="service-body pt-3">
                        <h5 class=""> <span class="">01.</span> General </h5>

                        <form v-on:submit.prevent="submit()">

                          <div class="form-group">
                            <label>Did you sleep well last night? </label>
                            <input class='form-control' type='text' v-model="sleep.good_sleep" placeholder="">
                          </div>

                          <div class="form-group">
                            <label>Did you take a hot shower or bath before bed? </label>
                            <input class='form-control' type='text' v-model="sleep.bath_before_bed" placeholder="">
                          </div>

                          <div class="form-group">
                            <label> Was your bedroom completely dark? </label>
                            <input class='form-control' type='text' v-model="sleep.dark_room" placeholder="">
                          </div>

                          <div class="form-group">
                            <label>Did you feel cool (temperature) while you slept? </label>
                            <input class='form-control' type='text' v-model="sleep.cool_room" placeholder="">
                          </div>

                          <div class="form-group">
                            <label>Were any clock faces visible from your bed? </label>
                            <input class='form-control' type='text' v-model="sleep.clock_visible" placeholder="">
                          </div>

                          <div class="form-group">
                            <label>Did you have any electronics with screens in your bedroom? </label>
                            <input class='form-control' type='text' v-model="sleep.electronics_in_room" placeholder="">
                          </div>

                          <div class="form-group">
                            <label>At any point, did you lie in bed awake longer than 20 minutes trying to fall asleep? </label>
                            <input class='form-control' type='text' v-model="sleep.lie_in_bed" placeholder="">
                          </div>

                          <div class="form-group">
                            <label>What was the temperature of your room, in Fahrenheit? </label>
                            <input class='form-control' type='text' v-model="sleep.room_temperature" placeholder="">
                          </div>
                          
                          <div class="new-button">
                            <input type="submit" value="Add Sleep Data" class="btn btn-primary">
                          </div>
                        </form>
                    </div>
                </div>
            </div>

            <div class="row mt-5">

                <div class="col-lg-4">
                    <div class="service-boxed bg-white p-4">
                        <i class="mbri-globe service-icon font-weight-bold"></i>
                        <div class="service-body pt-3">
                            <h5 class=""> <span class="">01.</span> Pre-Planning</h5>
                            <form v-on:submit.prevent="submit()">

                              <div class="form-group">
                                <label>Did you sleep well last night? </label>
                                <input class='form-control' type='text' v-model="sleep.good_sleep" placeholder="">
                              </div>

                              <div class="new-button">
                                <input type="submit" value="Add Sleep Data" class="btn btn-primary">
                              </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="service-boxed bg-white p-4">
                        <i class="mbri-calendar service-icon font-weight-bold"></i>
                        <div class="service-body pt-3">
                            <h5 class=""> <span class="">02.</span> Perfect Design</h5>
                            <p class="text-muted">
                                Lorem ipsum dolor sit amet consectetuer adipiscing elit, Aenean commodo ligula eget dolor Aenean elight massa.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="service-boxed bg-white p-4">
                        <i class="mbri-layers service-icon font-weight-bold"></i>
                        <div class="service-body pt-3">
                            <h5> <span class="">03.</span>Communication</h5>
                            <p class="text-muted">
                                Lorem ipsum dolor sit amet consectetuer adipiscing elit, Aenean/ commodo ligula eget dolor Aenean elight massa.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  </div>
    <!-- How do work end  -->

    <ul>
      <li v-for="error in errors"> {{ error }} </li>
    </ul>

       

  </div>
</template>


<style>
.new-button{
  text-align: center
}
.container{
  margin-bottom: 30px;
}
</style>


<script>
var axios = require('axios');

export default {
  data: function() {
    return {
      sleep: {
              good_sleep: "",
              bath_before_bed: "",
              dark_room: "",
              cool_room: "",
              clock_visible: "",
              electronics_in_room: "",
              lie_in_bed: "",
              room_temperature: "",
              user_id: "",
              
              alcohol: {
                        amount: "",
                        time: "",
                        increased_impact: ""
                        },

              exercise: {
                        duration: "",
                        time: ""
                        }
              },
      errors: []
    };
  },
  created: function() {
    var loggedIn = localStorage.getItem("loggedIn");

    if (!loggedIn) {
      this.$router.push("/login/");
    };
    
    axios.get("/api/sleeps/" + this.$route.params.id)
      .then(response => {
        this.sleep = response.data;
      });
  },
  methods: {
    submit: function() {
      var params = {
                    good_sleep: this.sleep.good_sleep,
                    bath_before_bed: this.sleep.bath_before_bed,
                    dark_room: this.sleep.dark_room,
                    cool_room: this.sleep.cool_room,
                    clock_visible: this.sleep.clock_visible,
                    electronics_in_room: this.sleep.electronics_in_room,
                    lie_in_bed: this.sleep.lie_in_bed,
                    room_temperature: this.sleep.room_temperature,
                    user_id: this.sleep.user_id
                    };
      axios.patch("/api/sleeps/" + this.sleep.id, params)
        .then(response => {
          this.$router.push("/");
        }).catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
}
</script>