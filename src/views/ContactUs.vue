<template>
  <div class="contact">
    <div class="container">

      <!-- home start -->
      <section class="heading-half bg-sub-page-home">
          <!-- <div class="bg-overlay"></div> -->
          <div class="container">
              <div class="row">
                  <div class="col-lg-12 page-next-level text-center">
                      <h4 class="pt-3">Contact</h4>
                      <div class="page-next text-light"> <a href="index.html">Home</a>/<span>Contact</span> </div>
                  </div>
              </div>
          </div>
      </section>
      <!-- home end -->

      <!-- contact start -->
      <section class="section bg-light">
          <div class="container">
              <div class="row mt-5">
                  <div class="col-lg-3">
                      <div class="contact-content bg-white p-3 mt-3 features-border text-center">
                          <div class="contact-icon pt-3 pb-3">
                              <i class="mbri-home h1 text-custom"></i>
                          </div>
                          <div class="contact-details">
                              <h5 class="">Mailing Address</h5>
                              <p class="">220 W. Ohio St.
                                  <br>Chicago, IL 60654</p>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-3">
                      <div class="contact-content bg-white p-3 mt-3 features-border text-center">
                          <div class="contact-icon pt-3 pb-3">
                              <i class="mbri-mobile2 h1 text-custom"></i>
                          </div>
                          <div class="contact-details">
                              <h5 class="">Phone</h5>
                              <p class="mb-0 f-14">424-256-5578</p>
                              <p class="f-14"> 800-Sleep-Coach </p>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-3">
                      <div class="contact-content bg-white p-3 mt-3 features-border text-center">
                          <div class="contact-icon pt-3 pb-3">
                              <i class="mbri-letter h1 text-custom"></i>
                          </div>
                          <div class="contact-details">
                              <h5 class="">E-mail</h5>
                              <p class="mb-0 f-14">info@sleepcoach.com</p>
                              <p class="f-14">support@sleepcoach.com</p>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-3">
                      <div class="contact-content bg-white p-3 mt-3 features-border text-center">
                          <div class="contact-icon pt-3 pb-3">
                              <i class="mbri-globe-2 h1 text-custom"></i>
                          </div>
                          <div class="contact-details">
                              <h5 class="f-16">Web</h5>
                              <p class="mb-0 f-14">www.sleepcoach.com</p>
                              <p class="f-14">www.sleepcoach.com/about</p>
                          </div>
                      </div>
                  </div>
              </div>

              <div class="row justify-content-center  pt-5 mt-5">
                  <div class="'col-lg-12">
                      <div class="section-title text-center mx-auto">
                          <h3 class="text-capitalize">Questions?</h3>
                          <p class="text-muted">Drop us a line, we'll get back to you as soon as possible.</p>
                      </div>
                  </div>
              </div>

              <div class="row justify-content-center mt-5">
                    <div>
                      <ul>
                        <li v-for="error in errors">{{ error }}</li>
                      </ul>
                    </div>
                    <div class="col-lg-10">
                      <div class="custom-form mt-4">
                          <div id="message"></div>
                          <form v-on:submit.prevent="submit()" name="contact-form" id="contact-form">
                              <div class="row">
                                  <div class="col-lg-6">
                                      <div class="form-group">                                            
                                          <input v-model="formName" id="name" type="text" class="form-control" placeholder="Your name..." >
                                      </div>
                                  </div>
                                  <div class="col-lg-6">
                                      <div class="form-group">
                                          <input v-model="formEmail" id="email" type="email" class="form-control" placeholder="Your email..." >
                                      </div>
                                  </div>
                              </div>

                              <div class="row">
                                  <div class="col-lg-12">
                                      <div class="form-group">
                                          <input v-model="formSubject" id="sub" type="text" class="form-control" placeholder="Your subject..." >
                                      </div>
                                  </div>
                              </div>

                              <div class="row">
                                  <div class="col-lg-12">
                                      <div class="form-group">
                                          <textarea v-model="formBody" id="comments" rows="4" class="form-control" placeholder="Your message..."></textarea>
                                      </div>
                                  </div>
                              </div>
                              <div class="row">
                                  <div class="col-lg-12">
                                      <input type="submit" id="submit" name="send" class="submitBnt btn btn-custom" value="Send Message">
                                      <div id="simple-msg"></div>
                                  </div>
                              </div>
                          </form>
                      </div>  
                  </div>                  


              </div>
          </div>
      </section>
      <!-- contact end -->

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
      formName: "",
      formEmail: "",
      formSubject: "",
      formBody: "",
      errors: []
    };
  },
  created: function() {},
  methods: {
    submit: function() {
      // trigger when form is submitted
      // axios call
      axios
      .post("/api/contact_form")
      .then(response => {
        console.log(response.data);
        this.$router.push("/");
      }).catch(errors => {
        this.errors = errors.response.data.errors;
      });
    }
  }
};
</script>
