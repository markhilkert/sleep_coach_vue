<template>
  <div class="sleep-information">

    <ul>
      <li v-for="error in errors"> {{ error }} </li>
    </ul>

    <div class='container'>
      <h2>How did you sleep last night?</h2>
      <form v-on:submit.prevent="submit()">
        <!-- Make this accordian style, so it's actually a bunch of forms, not one giant form -->
        <!-- Don't actually do modals before we pick out themes, it might conflict. -->
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
          <input type="submit" value="Create" class="btn btn-primary">
        </div>
      </form>
    </div>
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
              user_id: ""
              },
      errors: []
    };
  },
  created: function() {
    axios.get("/api/sleeps/" + this.$route.params.id)
      .then(response => {
        this.sleep = response.data;
      })
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
                    user_id: this.cat.user_id
                    };
      axios.patch("/api/sleeps", params)
        .then(response => {
          this.$router.push("/");
        }).catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
}
</script>