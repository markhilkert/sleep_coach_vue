<template>
  <div class="home">
    <div class="container">
      
      <!-- Home -->
      <section class="home-height-full bg-home-1" id="home">
          <div class="home-center">
              <div class="home-desc-center">
                  <div class="container">
                      <div class="row justify-content-center">
                          <div class="col-lg-10 text-center" id="title-text">
                            <h6 class="home-title text-black">Sleep Coach</h6>
                            <p class="pt-4 home-sub-title text-black mx-auto">Sleep Better.</p>
                            <router-link to="/signup" class="btn btn-outline btn-rounded"><span>Try it out</span></router-link>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      <!-- Home end -->

      <!-- How do work -->
      <section class="section services-wrapper">
          <div class="container">
              <div class="row">
                  <div class="col-lg-12 text-center">
                      <div class="section-title mx-auto">
                          <h3 class="mb-4">Real Results. </h3>
                          <p class="text-muted">Sleep Coach is a beautifully simple App to help you take control of your sleep. Simply start the timer when you're going to bed, and stop the timer when you wake up. Later, log your stats. That's it. </p>
                      </div>
                  </div>
              </div>
              <div class="row mt-5">
                  <div class="col-lg-4">
                      <div class="service-boxed bg-white p-4">
                          <i class="mbri-globe service-icon font-weight-bold"></i>
                          <div class="service-body pt-3">
                              <h5 class=""> <span class="">01.</span> Track your sleep time, wake up time, & sleep quality</h5>
                              <p class="text-muted">
                                  The first step to better sleep is consistency. See your consistency over time and how it affects how you feel. <br> <br> <br> <br> 
                              </p>
                          </div>
                      </div>
                  </div>

                  <div class="col-lg-4">
                      <div class="service-boxed bg-white p-4">
                          <i class="mbri-calendar service-icon font-weight-bold"></i>
                          <div class="service-body pt-3">
                              <h5 class=""> <span class="">02.</span> See how alcohol & caffeine affect your sleep </h5>
                              <p class="text-muted">
                                  Next, compare your sleep quality with the quantity of alcohol & caffeine you are drinking, and what time you drink them. You'll see trends that will allow you to change your behavior to maximize your sleep.
                              </p>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-4">
                      <div class="service-boxed bg-white p-4">
                          <i class="mbri-layers service-icon font-weight-bold"></i>
                          <div class="service-body pt-3">
                              <h5> <span class="">03.</span>Exercise</h5>
                              <p class="text-muted">
                                  Track your exercise time, duration, and intensity to see how it affects your sleep. <br> <br> <br> <br> <br> <br> 
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      <!-- How do work end  -->

    </div>
  </div>
</template>

<style>
  #title-text { margin-top: 575px;}
  #mark-photo { 
                margin-left: auto;
                margin-right: auto;
              }
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      errors: [],
    };
  },
  created: function() {},
  methods: {}
};
</script>
