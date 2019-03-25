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

      <highcharts :options="sleepTotal"></highcharts>
      <highcharts :options="caffeineTime"></highcharts>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Highcharts from 'highcharts'

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
      sleepTotal: {
        series: [{
          data: [] 
        }]
      },
      caffeineTime: {
        chart: {
                zoomType: 'x'
               },
        title: {
            text: 'Time of last caffeine intake'
        },
        subtitle: {
            text: document.ontouchstart === undefined ?
                    'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'
        },
        xAxis: {
          type: 'date'
        },
        yAxis: {
          type: 'time',
          title: {
            text: 'Time'
          }
        },
        legend: {
          enabled: false
        },
        plotOptions: {
          area: {
            fillColor: {
              linearGradient: {
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 1
              },
              stops: [
                [0, Highcharts.getOptions().colors[0]],
                [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
              ]
            },
            marker: {
                radius: 2
            },
            lineWidth: 1,
            states: {
                hover: {
                    lineWidth: 1
                }
            },
            threshold: null
          }
        },
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
        var i = 0;
        response.data.forEach( sleep => {
          this.sleepTotal.series[0].data.push(sleep.hours_in_bed);
          this.caffeineTime.series[0].data.push([]);
          this.caffeineTime.series[0].data[i].push(sleep.caffeine.time);
          this.caffeineTime.series[0].data[i].push(sleep.sleep_date);
          i++
        });
        console.log("===========================")
        console.log(this.caffeineTime.series[0].data)
        console.log("===========================")
      });

    axios.get("/api/users/" + userId)
      .then(response => {
        this.user = response.data;
    });
  },
  methods: {}
};
</script>
