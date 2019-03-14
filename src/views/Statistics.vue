<template>
  <div class="home">
    <div class="container">
      <h1>Your Sleep Stats</h1>
      <div>
        <h2>Last night, you spent </h2>
      </div>


    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      sleeps: [],
      errors: [],
      sleeping: false
    };
  },
  created: function() {
    axios.get("/api/sleeps/")
      .then(response => {
        this.sleeps = response.data;
        console.log(this.sleeps)
      })
  },
  methods: {}
};
</script>
