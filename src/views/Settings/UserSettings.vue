<template>
  <div>
    <h1>UserSettings</h1>
    <navbar></navbar>
    <router-view></router-view>
    <router-view name="helper"></router-view>
  </div>
</template>

<script>
import Navbar from "@/views/Navbar";
export default {
  name: "UserSettings",
  components: {Navbar}
}
</script>

<style scoped>

</style>