<template>
  <div class="statistics">
    <div class="container">

      <!-- home start -->
      <section class="heading-half bg-sub-page-home">
          <div class="container">
              <div class="row">
                  <div class="col-lg-12 page-next-level text-center">
                      <h4 class="pt-3">Your Sleep Statistics</h4>
                  </div>                    
              </div>
          </div>
      </section>
      <!-- home end -->   

      <!-- statistics start -->
      <!-- Faq -->
      <section class="section">
          <div class="container">
              <div class="row">
                  <div class="col-lg-12">
                      <div class="custom-faq mt-3">

                          <h2 class="mb-4 text-center">  &nbsp; Last night, you spent {{ user.last_night_sleep_time }} in bed. </h2>
                          <div class="underline"></div>

                          <h2 class="mb-4 text-center">  &nbsp; On average, you spend {{ user.average_total_sleep_time }} in bed. </h2>
                          <div class="underline"></div>

                          <highcharts :options="sleepTotal"></highcharts>
                          <div class="underline"></div>
                          <highcharts :options="caffeineTime"></highcharts>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      <!-- Faq end -->

      <div>
        <h2> </h2>
      </div>


      <!-- statistics end -->

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
