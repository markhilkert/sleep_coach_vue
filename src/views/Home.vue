<template>
  <div class="home">
    <div class="container">
      <h1>Sleep Coach</h1>
      <div>
        <button class="btn btn-primary" v-on:click="startSleep()"> Begin Sleeping </button>
      </div>
        
      <div v-if="this.sleeping">
        <h2>You are now sleeping.</h2>
      </div>
      
      <div>
        <button class="btn btn-success" v-on:click="endSleepGood()"> I slept well </button>
      </div>

      <div>
        <button class="btn btn-danger" v-on:click="endSleepGood()"> I slept poorly </button>
      </div>

      <div>
        <router-link v-bind:to="'/statistics/'"> See my Sleep Stats </router-link>
      </div>

    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      errors: [],
      sleep: {
              id: "",
              user_id: ""
              },
      sleeping: false
    };
  },
  // This will be used later on to determine if the user is logged in, and redirecting them to the login page if they are not.
  // created: function() {
  //   axios.get("/api/sleeps/")
  //     .then(response => {
  //       this.sleep = response.data;
  //     }).catch(error => {
  //       this.errors = error.response.data.errors;
  //     });
  // },
  methods: {
    startSleep: function() {
      this.sleeping = true
      axios.post("/api/sleeps/start")      
      .then(response => {
        this.sleep = response.data;
        console.log(this.sleep)
      }).catch(error => {
        this.errors = error.response.data.errors;
      });
    },
    endSleepGood: function() {
      this.sleeping = false
      axios.patch("/api/sleeps/end_good")
      .then(response => {
        this.$router.push("/sleeps/" + this.sleep.id + "/edit");
      }).catch(error => {
        this.errors = error.response.data.errors;
      });
    },
    endSleepBad: function() {
      this.sleeping = false
      axios.patch("/api/sleeps/end_bad")
      .then(response => {
        this.$router.push("/sleeps/" + this.sleep.id + "/edit");
      }).catch(error => {
        this.errors = error.response.data.errors;
      });
    }
  }
};
</script>
