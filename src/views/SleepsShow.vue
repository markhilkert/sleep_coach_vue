<template>
  <div class="sleeps-show">

    <div class="profile-card">
      <div>
        <img id="banner-image" src="http://www.wishbonespetcare.com/LRGpawprintbanner.png" alt="doesn't work">
      </div>
      <div class="card">
        <div class="row">
          <div class="col">
            <p class="card-title" id="first-family-name">{{ cat.first_name  }} {{  cat.family_name}}</p>
            <p class="card-text" id="title">{{ cat.title }}</p>
            <p class="card-text" id="location">{{ cat.location }}</p>
            <p class="card-text">Owner: {{ cat.owner }}</p>
          </div>
          <div class="col">
            <div id="action-buttons">
              <button v-on:click="connect()" class="btn btn-primary main-button">Connect</button>
              <button v-on:click="edit()" class="btn btn-primary main-button">Edit Profile</button>
              <router-link v-bind:to="'/cats/' + cat.id + '/catnections'">
                <button class="btn btn-primary main-button">Catnections</button>
              </router-link>
            </div>
          </div>
        </div>
        <div id="accordion">
          <div>
            <div class="card-header" id="headingOne">
              <h5 class="mb-0 text-center">
                <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Summary: 
                </button>
              </h5>
            </div>
            <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
              <div class="card-body">
                {{ cat.summary }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="profile-img-location">
      <div class="profile-img"></div>
        <img class="shadow-lg" v-if="cat.profile_url" :src="cat.profile_url">
    </div>
    <div class="card">
      <p class="card-title" id="sub-header">Experience:</p>
      <p class="card-text" id="experience">{{ cat.experience }}</p>
      <hr />
      <p class="card-title" id="sub-header">Education:</p>
      <p class="card-text">{{ cat.education }}</p>
    </div>
    <div class="card">
      <p class="card-title" id="sub-header">Skills:</p>
      <p class="card-text">{{ cat.skills }}</p>
      <hr />
      <p class="card-title" id="sub-header">Endorsements:</p>
      <p class="card-text">{{ cat.endorsements }}</p>
      <hr />
      <p class="card-title" id="sub-header">Accomplishments:</p>
      <p class="card-text">{{ cat.accomplishments }}</p>
    </div>
  </div>
</template>

<style>

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
              room_temperature: ""
              }
    };
  },
  created: function() {
    axios.get("/api/sleep/" + this.$route.params.id)
    .then(response => {
      this.sleep = response.data;
    });
  },
  methods: {
    edit: function() {
      this.$router.push("/sleeps/" + this.sleep.id + "/edit");
    }
  }
};
</script>
