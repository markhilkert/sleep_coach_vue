<template>
  <div class="sleep">
    <div class="container">
      
      <!-- Home -->
      <section class="home-height-full bg-sub-page-home" id="home">
          <div class="home-center">
              <div class="home-desc-center">
                  <div class="container">
                      <div class="row justify-content-center">
                          <div class="col-lg-10 text-center">
                              <h6 class="home-title text-white">Sleep Coach</h6>
                              <p class="pt-4 home-sub-title text-white mx-auto" v-if="!this.sleeping">Sleep well.</p>
                              <div class="pt-4">
                                  <button v-on:click="startSleep()" v-if="!this.sleeping"class="btn btn-outline btn-rounded"><span>Begin Sleeping</span></button>
                              </div>

                              <div v-if="this.sleeping">
                                <p class="pt-4 home-sub-title text-white mx-auto">You are now sleeping.</p>
                              </div>

                              <div class="pt-4" v-if="this.sleeping">
                                <button v-on:click="endSleepGood()" class="btn btn-outline btn-rounded"><span>I slept well</span></button>
                                <button v-on:click="endSleepBad()" class="btn btn-outline btn-rounded"><span>I slept poorly</span></button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      <!-- Home end -->
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
  created: function() {
    var loggedIn = localStorage.getItem("loggedIn");
    if (!loggedIn) {
      this.$router.push("/login/");
    };
  },
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
