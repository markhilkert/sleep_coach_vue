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
        chart: {
                type: 'column'
            },
        xAxis: {
                categories: [],
                crosshair: true
            },
        tooltip: {
          formatter: function() {
            var hours = Math.floor(this.y / 1000 / 60 / 60).toString();
            var minutes = Math.floor((this.y / 1000 / 60 / 60 - hours) * 60).toString();
            console.log('====================================')
            console.log(hours)
            console.log('====================================')
            
            return hours + ' hours ' + minutes + ' minutes '
          }
        },
        title: {
                text: 'Total Sleep Per Night'
            },
        yAxis: {
          type: 'datetime',
          title: {
              text: 'Hours'
          }
        },
        series: [{
          name: '',
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
          var data_point_color = ''
          if (sleep.good_sleep) {
            data_point_color = '#3c9643'
          } else {
            data_point_color = '#871915'
          }
          this.sleepTotal.series[0].data.push({y: sleep.hours_in_bed, color: data_point_color});
          this.sleepTotal.xAxis.categories.push(sleep.sleep_date);
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
