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
    var loggedIn = localStorage.getItem("loggedIn");
    var userId = localStorage.getItem("userId");

    if (!loggedIn) {
      this.$router.push("/login/");
    };

    axios.get("/api/sleeps/")
      .then(response => {
        this.sleeps = response.data;
    });

    axios.get("/api/users/" + userId)
      .then(response => {
        this.user = response.data;
    });
  },
  methods: {}
};
</script>
