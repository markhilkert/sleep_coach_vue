<template>
  <div class="real-home">
    <div class="container">
       

      <!-- home start -->
      <section class="heading-half bg-sub-page-home">
          <div class="container">
              <div class="row">
                  <div class="col-lg-12 page-next-level text-center">
                      <h4 class="pt-3">About Sleep Coach</h4>
                      <div class="page-next text-light"> <router-link to="/">Home</router-link>/<span>About</span> </div>
                  </div>
                  <div class="under-line">
                  </div>
              </div>
          </div>
      </section>
      <!-- home end -->

      <!-- about-->
      <section class="section">
          <div class="container">
              <div class="row justify-content-center">
                  <div class="col-md-6">
                      <h3 class="title text-center">Our Story</h3>
                  </div>
              </div>
              <div class="row justify-content-center">
                  <div class="col-10">
                      <div class="about-story text-center">
                          <div class="about-icon">
                              <i class="mbri-image-gallery"></i>
                              <h5 class="text-muted mb-3 mt-3">Sleep Coach is the product of one insomniac's obsession with bring great sleep to the world.</h5>
                              <p class="text-muted"> Sleep Coach's founder & CEO spent years trying to improve his sleep. He bought every type of pillow, spent hundreds of dollars on sleep trackers, but still wasn't getting results. Then, he read <a href="https://smile.amazon.com/Why-We-Sleep-Unlocking-Dreams/dp/1501144324"> an influential book </a> on sleep that focused on 12 sleep hygiene habits. Implementing those habits changed his life. So he founded Sleep Coach and wrote this app to help others track and implement the habits. We hope that we can improve the quality of your sleep—and thus, the quality of your life—one habit at at time.</p>
                          </div>
                      </div>
                  </div>

              </div>
          </div>
      </section>
      <!-- end about -->

      <!-- About -->
      <section class="about-bg-img">
          <div class="container-fluid pl-0">
              <div class="row">
                  <div class="col-lg-6 about-section">
                      <div class="about_bg_color">
                          <div class="row justify-content-center">
                              <div class="col-lg-8">
                                  <h3 class="title text-center mb-5">Track the Things that Affect Your Sleep</h3>
                              </div>
                          </div>
                          <div class="row">
                              <div class="col-lg-5 col-md-12 mr-auto">
                                  <div class="about-content text-center">
                                      <i class="mbri-speed text-custom"></i>
                                      <h5 class="pt-3">Sleep Quality</h5>
                                      <p class="pt-2" style=" line-height: 26px;"> Sleep tracking with a twist: you decide whether you slept well, rather than listening to an algorithm. </p>
                                  </div>
                              </div>
                              <div class="col-lg-5 col-md-12">
                                  <div class="about-content text-center">
                                      <i class="mbri-sun2 text-custom"></i>
                                      <h5 class="pt-3">Sunlight Exposure</h5>
                                      <p class="pt-2" style=" line-height: 26px;">Track whether you got sunlight exposure, how long, and what time. </p>
                                  </div>
                              </div>
                          </div>
                          <div class="row pt-5">
                              <div class="col-lg-5 col-md-12 mr-auto">
                                  <div class="about-content text-center">
                                      <i class="mbri-rocket text-custom"></i>
                                      <h5 class="pt-3">Caffeine Intake</h5>
                                      <p class="pt-2" style=" line-height: 26px;">How much coffee did you have in a day? When did you have your last cup? </p>
                                  </div>
                              </div>
                              <div class="col-lg-5 col-md-12">
                                  <div class="about-content text-center">
                                      <i class="mbri-protect text-custom"></i>
                                      <h5 class="pt-3">Alcohol Consumption</h5>
                                      <p class="pt-2" style=" line-height: 26px;">Did you drink? How much? When did you stop? </p>
                                  </div>
                              </div>
                          </div>

                      </div>
                  </div>
              </div>
          </div>
      </section>
      <!-- About end -->

      <!-- team -->
      <section class="section">
          <div class="container">
              <div class="row">
                  <div class="col-lg-12 text-center">
                      <div class="section-title text-center mx-auto">
                          <h3 class="mb-4">Meet Our Creative Team</h3>
                      </div>
                  </div>
              </div>
              <div class="row mt-5">
                  <div class="col-lg-4"> </div>
                  <div class="col-lg-4">
                      <div class="team-box">
                          <img src="images/team/team-3.jpg" alt="" class="img-fluid team-img rounded">
                          <div class="team-info p-4">
                              <div class="text-center">
                                  <h5 class="font-weight-light">Mark Hilkert</h5>
                                  <p class="text-uppercase text-muted"><small>CEO / Founder / Guinea Pig </small></p>
                                  <p class="team-desc">Current insomniac and former lawyer & chemical engineer turned coder, Mark wrote and tested Sleep Coach so you didn't have to.</p>
                              </div>
                              <div>
                                  <ul class="list-inline team-social mt-4 mb-0 text-center">
                                      <li class="list-inline-item"><a href="https://www.linkedin.com/in/markhilkert"><i class="mdi mdi-linkedin"></i></a></li>
                                      <li class="list-inline-item"><a href="mailto: mark.hilkert@gmail.com"><i class="mdi mdi-email"></i></a></li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>

              </div>
          </div>
      </section>
      <!-- Team end -->

      <!-- Client Slider -->
      <section class="section bg-light">
          <div class="container">
              <div class="col-lg-12 text-center">
                  <div class="section-title text-center mx-auto">
                      <h3 class="mb-4">Trusted by at least one person</h3>
                      <p class="text-muted">(We'll leave it to you to guess who.)</p>
                  </div>
              </div>
          </div>
      </section>
      <!-- Client Slider end-->      

    </div>
  </div>
</template>

<style>

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
