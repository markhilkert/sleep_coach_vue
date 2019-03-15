<template>
  <div class="logout">
    <div class="container">
      <router-link to="/logout">Logout</router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  created: function() {
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    localStorage.removeItem("loggedIn");
    this.$router.push("/login");
  }
};
</script>