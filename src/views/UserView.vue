<template>
  <div>
    <h1> user: {{ currentID }}</h1>
    <router-link to="profile">Profile</router-link>  |
    <router-link to="posts">Posts</router-link>
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
    $route(to, from) {
      this.currentID = to.params.id
      console.log('to:', to.params.id, 'from:', from.params.id)
    }
  }
}
</script>

<style scoped>

</style>