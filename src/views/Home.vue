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
                          <p class="text-muted">Sleep Coach is a beautifully simple App to help you take control of your sleep. You simply start the timer when you're going to bed, and stop the timer when you wake up. Later, log your stats. That's it. </p>
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
                                  The first step to better sleep is consistency. See your consistency over time and how it affects how you feel.
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
                                  Track your exercise time, duration, and intensity to see how it affects your sleep.
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      <!-- How do work end  -->

      <!-- Features -->
      <section class="section bg-light" id="features">
          <div class="container">
              <div class="row">
                  <div class="col-lg-12 text-center">
                      <div class="section-title text-center mx-auto">
                          <h3 class="mb-4">Awesome Features</h3>
                          <p class="text-muted">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born.</p>
                      </div>
                  </div>
              </div>
              <div class="row vertical-content justify-content-center mt-5 pb-4">
                  <div class="col-lg-6">
                      <div>
                          <img src="images/features-1.png" alt="" class="img-fluid mx-auto d-block">
                      </div>
                  </div>
                  <div class="col-lg-5 offset-lg-1">
                      <div class="more-features">
                          <i class="mbri-idea"></i>
                          <h4 class="pt-4 font-weight-light">Fully Responsive Bootstrap</h4>
                          <p class="text-muted preference-subtitle mt-3 mb-0">The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century a pseudo-Latin language.</p>

                          <p class="text-muted preference-subtitle mt-3 mb-0">Lorem ipsum dolor sit amet consectetuer adipiscing elit. Aenean commodo ligula eget dolor Aenean massa Lorem ipsum dolor sit amet.</p>

                          <a href="#" class="text-custom preference-more">Learn More.....</a>
                      </div>
                  </div>
              </div>

              <div class="row vertical-content mt-5">
                  <div class="col-lg-5">
                      <div class="more-features">
                          <i class="mbri-like"></i >
                              <h4 class="pt-4 font-weight-light">Works on all platforms</h4>
                              <p class="text-muted preference-subtitle mt-3 mb-0">The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century a pseudo-Latin language.</p>

                              <p class="text-muted preference-subtitle mt-3 mb-0">Lorem ipsum dolor sit amet consectetuer adipiscing elit. Aenean commodo ligula eget dolor Aenean massa Lorem ipsum dolor sit amet.</p>

                              <a href="#" class="text-custom preference-more">Learn More.....</a>
                          </div>
                      </div>
                      <div class="col-lg-6 offset-lg-1">
                          <div>
                              <img src="images/features-2.png" alt="" class="img-fluid mx-auto d-block">
                          </div>
                      </div>
                  </div>    
              </div>
          </section>
          <!-- Features end -->

          <!-- team -->
          <section class="section">
              <div class="container">
                  <div class="row">
                      <div class="col-lg-12 text-center">
                          <div class="section-title text-center mx-auto">
                              <h3 class="mb-4">Meet Our Team</h3>
                          </div>
                      </div>
                  </div>
                  <div class="row mt-5">
                    <div class="col-lg-4"> </div>
                      <div class="col-lg-4">
                          <div class="team-box">
                              <img src="images/team/team-3.jpg" alt="" class="img-fluid team-img rounded" id="mark-photo">
                              <div class="team-info p-4">
                                  <div class="text-center">
                                      <h5 class="font-weight-light">Mark Hilkert</h5>
                                      <p class="text-uppercase text-muted"><small>CEO / Founder / Guinea Pig </small></p>
                                      <p class="team-desc">Mark got interested in helping others sleep better after struggling with insomnia. He lives with his beautiful wife and silly dog. </p>
                                  </div>
                                  <div>
                                      <ul class="list-inline team-social mt-4 mb-0 text-center">
                                          <li class="list-inline-item"><a href="https://www.linkedin.com/in/markhilkert/"><i class="mdi mdi-linkedin"></i></a></li>
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
