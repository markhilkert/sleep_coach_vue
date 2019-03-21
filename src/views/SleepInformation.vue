<template>
  <div class="sleep-information">

    <div class='container'>

      <ul>
        <li v-for="error in errors"> {{ error }} </li>
      </ul>

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
                        <h5 class=""> General </h5>

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
                            <h5 class=""> Alcohol</h5>
                            <form v-on:submit.prevent="submitAlcohol()">

                              <div class="form-group">
                                <label>How many Drinks did you have last night? </label>
                                <input class='form-control' type='text' v-model="sleep.alcohol.amount" placeholder="">
                              </div>

                              <div class="form-group">
                                <label>What time did you have your last drink? </label>
                                <input class='form-control' type='time' v-model="sleep.alcohol.time" placeholder="">
                              </div>

                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" v-model="sleep.alcohol.increased_impact" value="true" id="defaultCheck1">
                                <label class="form-check-label" for="defaultCheck1">
                                  Check if you drank any hard liquor
                                </label>
                              </div>

                              <div class="new-button">
                                <input type="submit" value="Add Alcohol" class="btn btn-primary">
                              </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="service-boxed bg-white p-4">
                        <i class="mbri-globe service-icon font-weight-bold"></i>
                        <div class="service-body pt-3">
                            <h5 class=""> Caffeine </h5>
                            <form v-on:submit.prevent="submitCaffeine()">

                              <div class="form-group">
                                <label>How many cups of coffee did you have yesterday? </label>
                                <input class='form-control' type='text' v-model="sleep.caffeine.amount" placeholder="">
                              </div>

                              <div class="form-group">
                                <label>What time did you have your last caffeinated beverage? </label>
                                <input class='form-control' type='time' v-model="sleep.caffeine.time" placeholder="">
                              </div>

                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" v-model="sleep.caffeine.increased_impact" value="true" id="defaultCheck1">
                                <label class="form-check-label" for="defaultCheck1">
                                  Check if your coffee was particularly strong (e.g., cold brew)
                                </label>
                              </div>

                              <div class="new-button">
                                <input type="submit" value="Add Caffeine" class="btn btn-primary">
                              </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="service-boxed bg-white p-4">
                        <i class="mbri-globe service-icon font-weight-bold"></i>
                        <div class="service-body pt-3">
                            <h5 class=""> Late Meals </h5>
                            <form v-on:submit.prevent="submitLateMeal()">

                              <div class="form-group">
                                <label>What time did you eat your late meal? </label>
                                <input class='form-control' type='time' v-model="sleep.late_meal.time" placeholder="">
                              </div>

                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" v-model="sleep.late_meal.increased_impact" value="true" id="defaultCheck1">
                                <label class="form-check-label" for="defaultCheck1">
                                  Check if you ate food that tends to cause you indigestion
                                </label>
                              </div>

                              <div class="new-button">
                                <input type="submit" value="Add Late Meal" class="btn btn-primary">
                              </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="service-boxed bg-white p-4">
                        <i class="mbri-calendar service-icon font-weight-bold"></i>
                        <div class="service-body pt-3">
                            <h5 class=""> Exercise </h5>
                            <form v-on:submit.prevent="submitExercise()">

                              <div class="form-group">
                                <label>What time did you exercise? </label>
                                <input class='form-control' type='time' v-model="sleep.exercises.time" placeholder="">
                              </div>

                              <div class="form-group">
                                <label>How long did you exercise for? </label>
                                <input class='form-control' type='text' v-model="sleep.exercises.duration" placeholder="">
                              </div>

                              <div class="new-button">
                                <input type="submit" value="Add Exercise" class="btn btn-primary">
                              </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="service-boxed bg-white p-4">
                        <i class="mbri-calendar service-icon font-weight-bold"></i>
                        <div class="service-body pt-3">
                            <h5 class=""> Exercise </h5>
                            <form v-on:submit.prevent="submitExercise()">

                              <div class="form-group">
                                <label>What time did you exercise? </label>
                                <input class='form-control' type='time' v-model="sleep.exercises.time" placeholder="">
                              </div>

                              <div class="form-group">
                                <label>How long did you exercise for? </label>
                                <input class='form-control' type='text' v-model="sleep.exercises.duration" placeholder="">
                              </div>

                              <div class="new-button">
                                <input type="submit" value="Add Exercise" class="btn btn-primary">
                              </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="service-boxed bg-white p-4">
                        <i class="mbri-calendar service-icon font-weight-bold"></i>
                        <div class="service-body pt-3">
                            <h5 class=""> Exercise </h5>
                            <form v-on:submit.prevent="submitExercise()">

                              <div class="form-group">
                                <label>What time did you exercise? </label>
                                <input class='form-control' type='time' v-model="sleep.exercises.time" placeholder="">
                              </div>

                              <div class="form-group">
                                <label>How long did you exercise for? </label>
                                <input class='form-control' type='text' v-model="sleep.exercises.duration" placeholder="">
                              </div>

                              <div class="new-button">
                                <input type="submit" value="Add Exercise" class="btn btn-primary">
                              </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="service-boxed bg-white p-4">
                        <i class="mbri-calendar service-icon font-weight-bold"></i>
                        <div class="service-body pt-3">
                            <h5 class=""> Exercise </h5>
                            <form v-on:submit.prevent="submitExercise()">

                              <div class="form-group">
                                <label>What time did you exercise? </label>
                                <input class='form-control' type='time' v-model="sleep.exercises.time" placeholder="">
                              </div>

                              <div class="form-group">
                                <label>How long did you exercise for? </label>
                                <input class='form-control' type='text' v-model="sleep.exercises.duration" placeholder="">
                              </div>

                              <div class="new-button">
                                <input type="submit" value="Add Exercise" class="btn btn-primary">
                              </div>
                            </form>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
  </div>
    <!-- How do work end  -->      

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

              caffeine: {
                        amount: "",
                        time: "",
                        increased_impact: ""
                        },

              late_meal: {
                          amount: "",
                          time: "",
                          increased_impact: ""
                          },

              exercises: {
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
    },
    submitAlcohol: function() {
      var params = {
                    amount: this.sleep.alcohol.amount,
                    time: this.sleep.alcohol.time,
                    increased_impact: this.sleep.alcohol.increased_impact,
                    sleep_id: this.$route.params.id,
                    user_id: this.sleep.user_id
                    };
      axios.post("/api/alcohols/", params)
        .then(response => {
          this.$router.push("/");
        }).catch(error => {
          this.errors = error.response.data.errors;
        });
    },
    submitCaffeine: function() {
      var params = {
                    amount: this.sleep.caffeine.amount,
                    time: this.sleep.caffeine.time,
                    increased_impact: this.sleep.caffeine.increased_impact,
                    sleep_id: this.$route.params.id,
                    user_id: this.sleep.user_id
                    };
      axios.post("/api/caffeines/", params)
        .then(response => {
          this.$router.push("/");
        }).catch(error => {
          this.errors = error.response.data.errors;
        });
    },
    submitLateMeal: function() {
      var params = {
                    amount: this.sleep.late_meal.amount,
                    time: this.sleep.late_meal.time,
                    increased_impact: this.sleep.late_meal.increased_impact,
                    sleep_id: this.$route.params.id,
                    user_id: this.sleep.user_id
                    };
      axios.post("/api/late_meals/", params)
        .then(response => {
          this.$router.push("/");
        }).catch(error => {
          this.errors = error.response.data.errors;
        });
    },
    submitExercise: function() {
      var params = {
                    duration: this.sleep.exercises.duration,
                    time: this.sleep.exercises.time,
                    sleep_id: this.$route.params.id,
                    user_id: this.sleep.user_id
                    };
      axios.post("/api/exercises/", params)
        .then(response => {
          this.$router.push("/");
        }).catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
}
</script>