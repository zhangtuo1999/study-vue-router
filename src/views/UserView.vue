<template>
  <div>
    <h1> user: {{ currentID }}</h1>
    <router-link :to="{path:`/user/${currentID}/profile`}">Profile</router-link>  |
    <router-link to="/user/1/posts">Posts</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "UserView",
  data() {
    return {
      currentID: undefined,
    }
  },
  created() {
    this.currentID = this.$route.params.id
  },
  watch: {
    $route(to) {
      this.currentID = to.params.id
    }
  }
}
</script>

<style scoped>

</style>