<template>
  <div class="sleeps-edit">
    <ul>
      <li v-for="error in errors"> {{ error }}</li>
    </ul>

    <div class='container'>
      <h2>Edit Sleep</h2>
      <form v-on:submit.prevent="submit()">

        <div class="form-group">
          <label>First Name: </label>
          <input class='form-control' type='text' v-model="cat.first_name" placeholder="First Name">
        </div>
        <div class="form-group">
          <label>Family Name: </label>
          <input class='form-control' type='text' v-model="cat.family_name" placeholder="Family Name">
        </div>
        <div class="form-group">
          <label>Title: </label>
          <input class='form-control' type='text' v-model="cat.title" placeholder="Title">
        </div>
        <div class="form-group">
          <label>Education: </label>
          <input class='form-control' type='text' v-model="cat.education" placeholder="Education">
        </div>
        <div class="form-group">
          <label>Experience: </label>
          <input class='form-control' type='text' v-model="cat.experience" placeholder="Experience">
        </div>
        <div class="form-group">
          <label>Location: </label>
          <input class='form-control' type='text' v-model="cat.location" placeholder="Location">
        </div>
        <div class="form-group">
          <label>Owner: </label>
          <input class='form-control' type='text' v-model="cat.owner" placeholder="Owner">
        </div>
        <div class="form-group">
          <label>Summary: </label>
          <input class='form-control' type='text' v-model="cat.summary" placeholder="Summary">
        </div>
        <div class="form-group">
          <label>Profile Picture URL: </label>
          <input class='form-control' type='text' v-model="cat.profile_url" placeholder="Profile url">
        </div>
        <div class="form-group">
          <label>Accomplishments: </label>
          <input class='form-control' type='text' v-model="cat.accomplishments" placeholder="Accomplishments">
        </div>
        <div class="form-group">
          <label>Endorsements: </label>
          <input class='form-control' type='text' v-model="cat.endorsements" placeholder="Endorsements">
        </div>
        <div class="form-group">
          <label>Skills: </label>
          <input class='form-control' id='' type='text' v-model="cat.skills" placeholder="Skills">
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