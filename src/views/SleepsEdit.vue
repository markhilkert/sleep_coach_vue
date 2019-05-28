<template>
  <div class="sleeps-edit">
    <ul>
      <li v-for="error in errors"> {{ error }}</li>
    </ul>
  
    <section class="section services-wrapper">
      <div class="container">
          
          <div class="row">
              <div class="col-lg-12 text-center">
                  <div class="section-title mx-auto">
                      <h3 id="edit-title" class="mb-4" style="color: white;"> Change Me. </h3>
                  </div>
              </div>
          </div>

          <div class="row mt-5">
            <div class="col-lg-3"> </div>
            <div class="col-lg-6">
                <div class="service-boxed bg-white p-4">
                    <i class="mbri-globe service-icon font-weight-bold"></i>
                    <div class="service-body pt-3">
                        <h5 class=""> Edit Sleep </h5>

                        <form class="text-left" v-on:submit.prevent="submit()">
                          <div class="form-group"> 
                            <label> How did you feel when you woke up on {{ this.sleep.formatted.wake_date }}? </label>
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
                            <label> What time did you go to sleep? </label>
                            <input class='form-control' type='time' v-model="sleep.formatted.simple_start_time">
                          </div>

                          <div class="form-group">
                            <label> What time did you wake up? </label>
                            <input class='form-control' type='time' v-model="sleep.formatted.simple_end_time">
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
                            <input type="submit" value="Update Sleep Data" class="btn btn-primary">
                          </div>
                        </form>
                    </div>
                </div>
            </div>
          </div>
        </div>
    </section>

    <div class='container'>
      <h2>Edit Sleep</h2>
      <form v-on:submit.prevent="submit()">

        <div class="form-group">
          <label> Start Time </label>
          <input class='form-control' type='time' v-model="sleep.formatted.simple_start_time">
        </div>
        <div class="form-group">
          <label> End Time </label>
          <input class='form-control' type='time' v-model="sleep.formatted.simple_end_time">
        </div>
        <div class="form-group">
          <label> Good Sleep </label>
          <input class='form-check' type='checkbox' v-model="sleep.good_sleep">
        </div>
        <div class="form-group">
          <label> Bath Before Bed </label>
          <input class='form-check' type='checkbox' v-model="sleep.bath_before_bed">
        </div>
        <div class="form-group">
          <label> Dark Room </label>
          <input class='form-check' type='checkbox' v-model="sleep.dark_room">
        </div>
        <div class="form-group">
          <label> Cool Room </label>
          <input class='form-check' type='checkbox' v-model="sleep.cool_room">
        </div>
        <div class="form-group">
          <label> Clock Visible </label>
          <input class='form-check' type='checkbox' v-model="sleep.clock_visible">
        </div>
        <div class="form-group">
          <label> Electronics in Room </label>
          <input class='form-check' type='checkbox' v-model="sleep.electronics_in_room">
        </div>
        <div class="form-group">
          <label> Lie in Bed </label>
          <input class='form-check' type='checkbox' v-model="sleep.lie_in_bed">
        </div>
        <div class="form-group">
          <label> Room Temperature </label>
          <input class='form-control' type='text' v-model="sleep.room_temperature" placeholder="Enter Room Temperature">
        </div>
        
        <input type="submit" value="Update" class="btn btn-primary">
      </form>
    </div>
  </div>
</template>


<style>
.btn{
  position: relative;
  align-self: center;
}
</style>


<script>
var axios = require('axios');

export default {
  data: function() {
    return {
      sleep: {
              user_id: "",
              start_time: "",
              end_time: "",
              good_sleep: "",
              bath_before_bed: "",
              dark_room: "",
              cool_room: "",
              clock_visible: "",
              electronics_in_room: "",
              lie_in_bed: "",
              room_temperature: "",
              formatted: []
              },
      errors: []
    };
  },
  created: function() {
    axios.get("/api/sleeps/" + this.$route.params.id)
      .then(response => {
        this.sleep = response.data;
        console.log(this.sleep)
      })
  },
  methods: {
    submit: function() {
      var params = {
                    user_id: this.sleep.user_id,
                    start_time: this.sleep.formatted.simple_start_time,
                    end_time: this.sleep.formatted.simple_end_time,
                    good_sleep: this.sleep.good_sleep,
                    bath_before_bed: this.sleep.bath_before_bed,
                    dark_room: this.sleep.dark_room,
                    cool_room: this.sleep.cool_room,
                    clock_visible: this.sleep.clock_visible,
                    electronics_in_room: this.sleep.electronics_in_room,
                    lie_in_bed: this.sleep.lie_in_bed,
                    room_temperature: this.sleep.room_temperature
                    };
      axios.patch("/api/sleeps/" + this.sleep.id, params)
        .then(response => {
          this.$router.push("/sleeps/" + this.sleep.id);
        }).catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
}
</script>