<template>
  <div class="home">
    <div class="container">
      <h1>Your Sleep Stats</h1>
      <div>
        <h2>Last night, you spent {{ user.last_night_sleep_time }} in bed. </h2>
      </div>


    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      sleeps: [],
      user: {
        last_night_sleep_time: ""
      },
      errors: [],
      sleeping: false
    };
  },
  created: function() {
    axios.get("/api/sleeps/")
      .then(response => {
        this.sleeps = response.data;
        console.log(this.sleeps[0].user_id)
    });

    axios.get("/api/users/" + this.sleeps[0].user_id)
      .then(response => {
        this.user = response.data;
    });
  },
  methods: {}
};
</script>
