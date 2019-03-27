<template>
  <div class="sleep-information">

    <div class='container'>

      <ul>
        <li v-for="error in errors"> {{ error }} </li>
      </ul>

    <!-- How do work -->
    <section class="section services-wrapper bg-sub-page-home">
        <div class="row alert-container">
          <div v-if="sleepSubmit" class="alert alert-success col-10 offset-1" aria-label="Close" role="alert">
            <button type="button" class="close" @click="sleepSubmit = false">
              <span aria-hidden="true">&times;</span>
            </button>
            Thanks for submitting your general sleep information.
          </div>

          <div v-if="alcoholSubmit" class="alert alert-success col-10 offset-1" aria-label="Close" role="alert">
            <button type="button" class="close" @click="alcoholSubmit = false">
              <span aria-hidden="true">&times;</span>
            </button>
            Thanks for submitting your alcohol information.
          </div>

          <div v-if="caffeineSubmit" class="alert alert-success col-10 offset-1" aria-label="Close" role="alert">
            <button type="button" class="close" @click="caffeineSubmit = false">
              <span aria-hidden="true">&times;</span>
            </button>
            Thanks for submitting your caffeine information.
          </div>

          <div v-if="lateMealSubmit" class="alert alert-success col-10 offset-1" aria-label="Close" role="alert">
            <button type="button" class="close" @click="lateMealSubmit = false">
              <span aria-hidden="true">&times;</span>
            </button>
            Thanks for submitting your late meal information.
          </div>

          <div v-if="exerciseSubmit" class="alert alert-success col-10 offset-1" aria-label="Close" role="alert">
            <button type="button" class="close" @click="exerciseSubmit = false">
              <span aria-hidden="true">&times;</span>
            </button>
            Thanks for submitting your exercise information.
          </div>

          <div v-if="morningSunSubmit" class="alert alert-success col-10 offset-1" aria-label="Close" role="alert">
            <button type="button" class="close" @click="morningSunSubmit = false">
              <span aria-hidden="true">&times;</span>
            </button>
            Thanks for submitting your morning sun information.
          </div>

          <div v-if="napSubmit" class="alert alert-success col-10 offset-1" aria-label="Close" role="alert">
            <button type="button" class="close" @click="napSubmit = false">
              <span aria-hidden="true">&times;</span>
            </button>
            Thanks for submitting your nap information.
          </div>

          <div v-if="relaxSubmit" class="alert alert-success col-10 offset-1" role="alert">
            <button type="button" class="close" @click="relaxSubmit = false">
              <span aria-hidden="true">&times;</span>
            </button>
            Thanks for submitting your relaxation information.
          </div>
        </div>


        <div class="container">
            
            <div class="row">
                <div class="col-lg-12 text-center">
                    <div class="section-title mx-auto">
                        <h3 id="edit-title" class="mb-4" style="color: white;">How did you sleep last night?</h3>
                    </div>
                </div>
            </div>

            <div class="row mt-5">
              <div class="col-lg-3"> </div>
              <div class="col-lg-6">
                  <div class="service-boxed bg-white p-4">
                      <i class="mbri-globe service-icon font-weight-bold"></i>
                      <div class="service-body pt-3">
                          <h5 class=""> General </h5>

                          <form class="text-left" v-on:submit.prevent="submit()">
                            <div class="form-group"> 
                              <label> How did you feel when you woke up this morning? </label>
                              <div class="form-check">
                                <input class="form-check-input" type="radio" name="sleepWell" id="showered" v-model="sleep.good_sleep" v-bind:value="true">
                                <label class="form-check-label" for="sleptGood">Good</label>
                              </div>

                              <div class="form-check">
                                <input class="form-check-input" type="radio" name="sleepWell" id="notShowered" v-model="sleep.good_sleep" v-bind:value="false">
                                <label class="form-check-label" for="sleptBad">Bad</label>
                              </div>
                            </div>


                            <div class="form-group">
                              <label>Did you take a hot shower or bath before bed? </label>
                              <div class="form-check">
                                <input class="form-check-input" type="radio" name="shower" id="sleptGood" v-model="sleep.bath_before_bed" v-bind:value="true">
                                <label class="form-check-label" for="sleptGood">Yes</label>
                              </div>

                              <div class="form-check">
                                <input class="form-check-input" type="radio" name="shower" id="sleptBad" v-model="sleep.bath_before_bed" v-bind:value="false">
                                <label class="form-check-label" for="sleptBad">No</label>
                              </div>
                            </div>

                            <div class="form-group">
                              <label> Was your bedroom completely dark? </label>
                              <div class="form-check">
                                <input class="form-check-input" type="radio" name="dark" id="Dark" v-model="sleep.dark_room" v-bind:value="true">
                                <label class="form-check-label" for="Dark">Yes</label>
                              </div>

                              <div class="form-check">
                                <input class="form-check-input" type="radio" name="dark" id="notDark" v-model="sleep.dark_room" v-bind:value="false">
                                <label class="form-check-label" for="notDark">No</label>
                              </div>
                            </div>

                            <div class="form-group">
                              <label> Did you feel cool (temperature) while you slept? </label>
                              <div class="form-check">
                                <input class="form-check-input" type="radio" name="temp" id="cool" v-model="sleep.cool_room" v-bind:value="true">
                                <label class="form-check-label" for="cool">Yes</label>
                              </div>

                              <div class="form-check">
                                <input class="form-check-input" type="radio" name="temp" id="notCool" v-model="sleep.cool_room" v-bind:value="false">
                                <label class="form-check-label" for="notCool">No</label>
                              </div>
                            </div>

                            <div class="form-group">
                              <label> Were any clock faces visible from your bed? </label>
                              <div class="form-check">
                                <input class="form-check-input" type="radio" name="clock" id="clock" v-model="sleep.clock_visible" v-bind:value="true">
                                <label class="form-check-label" for="clock">Yes</label>
                              </div>

                              <div class="form-check">
                                <input class="form-check-input" type="radio" name="clock" id="noClock" v-model="sleep.clock_visible" v-bind:value="false">
                                <label class="form-check-label" for="noClock">No</label>
                              </div>
                            </div>

                            <div class="form-group">
                              <label> Did you have any electronics with screens in your bedroom? </label>
                              <div class="form-check">
                                <input class="form-check-input" type="radio" name="electronics" id="electronics" v-model="sleep.electronics_in_room" v-bind:value="true">
                                <label class="form-check-label" for="electronics">Yes</label>
                              </div>

                              <div class="form-check">
                                <input class="form-check-input" type="radio" name="electronics" id="noElectronics" v-model="sleep.electronics_in_room" v-bind:value="false">
                                <label class="form-check-label" for="noElectronics">No</label>
                              </div>
                            </div>

                            <div class="form-group">
                              <label> At any point, did you lie in bed awake longer than 20 minutes trying to fall asleep? </label>
                              <div class="form-check">
                                <input class="form-check-input" type="radio" name="lieAwake" id="awake" v-model="sleep.lie_in_bed" v-bind:value="true">
                                <label class="form-check-label" for="awake">Yes</label>
                              </div>

                              <div class="form-check">
                                <input class="form-check-input" type="radio" name="lieAwake" id="noAwake" v-model="sleep.lie_in_bed" v-bind:value="false">
                                <label class="form-check-label" for="noAwake">No</label>
                              </div>
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
                                  <br> <br> <br> <br> <br>
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
                                  <br> <br>
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
                                  <br> <br> <br> <br> <br> <br> <br> 
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
                                <br>
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
                            <h5 class=""> Morning Sun </h5>
                            <form v-on:submit.prevent="submitMorningSun()">

                              <div class="form-group">
                                <label>What time did you get outside in the morning? </label>
                                <input class='form-control' type='time' v-model="sleep.morning_sun.time" placeholder="">
                              </div>

                              <div class="form-group">
                                <label>How long did you stay outside? </label>
                                <input class='form-control' type='text' v-model="sleep.morning_sun.duration" placeholder="">
                              </div>

                              <div class="new-button">
                                <input type="submit" value="Add Morning Sun" class="btn btn-primary">
                              </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="service-boxed bg-white p-4">
                        <i class="mbri-calendar service-icon font-weight-bold"></i>
                        <div class="service-body pt-3">
                            <h5 class=""> Naps </h5>
                            <form v-on:submit.prevent="submitNap()">

                              <div class="form-group">
                                <label>What time did take a nap? </label>
                                <input class='form-control' type='time' v-model="sleep.naps.time" placeholder="">
                              </div>

                              <div class="form-group">
                                <label>How long did you nap for? </label>
                                <input class='form-control' type='text' v-model="sleep.naps.duration" placeholder="">
                                <br>
                              </div>

                              <div class="new-button">
                                <input type="submit" value="Add Nap" class="btn btn-primary">
                              </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="service-boxed bg-white p-4">
                        <i class="mbri-calendar service-icon font-weight-bold"></i>
                        <div class="service-body pt-3">
                            <h5 class=""> Relax Before Bed </h5>
                            <form v-on:submit.prevent="submitRelax()">

                              <div class="form-group">
                                <label>What time did relax? </label>
                                <input class='form-control' type='time' v-model="sleep.relax.time" placeholder="">
                              </div>

                              <div class="form-group">
                                <label>How long did you relax for? </label>
                                <input class='form-control' type='text' v-model="sleep.relax.duration" placeholder="">
                              </div>

                              <div class="new-button">
                                <input type="submit" value="Add Relaxation" class="btn btn-primary">
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
#edit-title { margin-top: 25px;}

.alert-container {
  position: fixed;
  z-index: 9999;
  width: 80%;
  left: 10%;
}

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
                        },

              morning_sun: {
                           duration: "",
                           time: ""
                           },
              naps: {
                    duration: "",
                    time: ""
                    },
              relax: {
                           duration: "",
                           time: ""
                           }
              },
      sleepSubmit: false,
      alcoholSubmit: false,
      caffeineSubmit: false,
      lateMealSubmit: false,
      exerciseSubmit: false,
      morningSunSubmit: false,
      napSubmit: false,
      relaxSubmit: false,      
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
          this.sleepSubmit = true;
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
          this.alcoholSubmit = true;
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
          this.caffeineSubmit = true;
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
          this.lateMealSubmit = true;
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
          this.exerciseSubmit = true;
        }).catch(error => {
          this.errors = error.response.data.errors;
        });
    },
    submitMorningSun: function() {
      var params = {
                    duration: this.sleep.morning_sun.duration,
                    time: this.sleep.morning_sun.time,
                    sleep_id: this.$route.params.id,
                    user_id: this.sleep.user_id
                    };
      axios.post("/api/morning_suns/", params)
        .then(response => {
          this.morningSunSubmit = true;
        }).catch(error => {
          this.errors = error.response.data.errors;
        });
    },
    submitNap: function() {
      var params = {
                    duration: this.sleep.naps.duration,
                    time: this.sleep.naps.time,
                    sleep_id: this.$route.params.id,
                    user_id: this.sleep.user_id
                    };
      axios.post("/api/naps/", params)
        .then(response => {
          this.napSubmit = true;
        }).catch(error => {
          this.errors = error.response.data.errors;
        });
    },
    submitRelax: function() {
      var params = {
                    duration: this.sleep.relax.duration,
                    time: this.sleep.relax.time,
                    sleep_id: this.$route.params.id,
                    user_id: this.sleep.user_id
                    };
      axios.post("/api/relaxes/", params)
        .then(response => {
          this.relaxSubmit = true;
        }).catch(error => {
          this.errors = error.response.data.errors;
        });
    },
  }
}
</script>