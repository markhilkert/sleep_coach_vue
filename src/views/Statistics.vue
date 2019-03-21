<template>
  <div class="home">
    <div class="container">
      <h1>Your Sleep Stats</h1>
      <div>
        <h2>Last night, you spent {{ user.last_night_sleep_time }} in bed. </h2>
      </div>

      <div>
        <h2>On average, you spend {{ user.average_total_sleep_time }} in bed. </h2>
      </div>

      <highcharts :options="chartOptions"></highcharts>
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
        last_night_sleep_time: "",
        average_total_sleep_time: ""
      },
      errors: [],
      sleeping: false,
      chartOptions: {
        series: [{
          data: [] 
        }]
      }
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
        response.data.forEach( sleep => {
          this.chartOptions.series[0].data.push(sleep.hours_in_bed);
        });
      });

    axios.get("/api/users/" + userId)
      .then(response => {
        this.user = response.data;
    });
  },
  methods: {}
};
</script>
