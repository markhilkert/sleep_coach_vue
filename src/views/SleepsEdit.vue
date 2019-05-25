<template>
  <div class="sleeps-edit">
    <ul>
      <li v-for="error in errors"> {{ error }}</li>
    </ul>

    <div class='container'>
      <h2>Edit Sleep</h2>
      <form v-on:submit.prevent="submit()">

        <div class="form-group">
          <label> Start Time </label>
          <input class='form-control' type='time' v-model="sleep.start_time">
        </div>
        <div class="form-group">
          <label> End Time </label>
          <input class='form-control' type='time' v-model="sleep.end_time">
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
              room_temperature: ""
              },
      errors: []
    };
  },
  created: function() {
    axios.get("/api/sleep/" + this.$route.params.id)
      .then(response => {
        this.sleep = response.data;
      })
  },
  methods: {
    submit: function() {
      var params = {
                    user_id: this.sleep.user_id,
                    start_time: this.sleep.start_time,
                    end_time: this.sleep.end_time,
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
          this.$router.push("/cats/" + this.cat.id);
        }).catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
}
</script>