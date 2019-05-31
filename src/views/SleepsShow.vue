<template>
  <div class="sleeps-show">
    <section class="section bg-sub-page-home services-wrapper">
      <div class="container">
          
          <div class="row">
              <div class="col-lg-12 text-center">
                  <div class="section-title mx-auto">
                      <h3 id="edit-title" class="mb-4" style="color: white;"> Your sleep on {{ this.sleep.formatted.fall_asleep_date }}. </h3>
                  </div>
              </div>
          </div>

          <div class="row mt-5">
            <div class="col-lg-3"> </div>
            <div class="col-lg-6">
                <div class="service-boxed bg-white p-4">
                    <i class="mbri-globe service-icon font-weight-bold"></i>
                    <div class="service-body pt-3">
                        <h5 class=""> {{ this.sleep.formatted.fall_asleep_date }}: Sleep Stats </h5>

                        <div class="text-left"> Fall Asleep Time: <b> {{ this.sleep.start_time }} </b> </div>
                        <div class="text-left"> Wake Time: <b> {{ this.sleep.end_time }} </b> </div>
                        <div class="text-left"> You <b> slept {{ this.sleep.good_sleep ? "well" : "poorly" }} </b>  that night. </div>
                        <div class="text-left"> You <b>{{ this.sleep.bath_before_bed ? "showered" : "did not shower" }} </b> before bed. </div>
                        <div class="text-left"> Your bedroom <b> was {{ this.sleep.dark_room ? "" : "not" }} </b> completely dark. </div>
                        <div class="text-left"> You <b> {{ this.sleep.cool_room ? "felt cool" : "did not feel cool" }} </b> that night. </div>
                        <div class="text-left"> You <b> could {{ this.sleep.clock_visible ? "" : "not" }} </b> see any clock faces from your bed. </div>
                        <div class="text-left"> You <b> {{ this.sleep.electronics_in_room ? "had" : "did not have" }} electronics </b> in your bedroom. </div>
                        <div class="text-left"> You <b> {{ this.sleep.lie_in_bed ? "lied" : "did not lie" }} in bed </b> for longer than 20 minutes at a time. </div>
                        <div class="text-left"> Your room was <b> {{ this.sleep.room_temperature }} degrees. </b> </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
    </section>
  </div>
</template>


<style>
.btn{
  position: relative;
  align-self: center;
}
</style>

<script>
var axios = require("axios");

export default {
  data: function() {
    return {
      sleep: {
              user_id: "",
              start_time: "",
              end_time: "",
              good_sleep: "",
              bath_before_bed: "",
              dark_room: "",
              cool_room: "",
              clock_visible: "",
              electronics_in_room: "",
              lie_in_bed: "",
              room_temperature: "",
              formatted: []
      }
    };
  },
  created: function() {
    axios.get("/api/sleeps/" + this.$route.params.id)
    .then(response => {
      this.sleep = response.data;
      console.log(this.sleep)
    });
  },
  methods: {
  }
};
</script>
