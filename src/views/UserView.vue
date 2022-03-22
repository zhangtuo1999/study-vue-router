<template>
  <div>
    <h1> user: {{ id }}</h1>
    <router-link :to="{path:`/user/${id}/profile`}">Profile</router-link>  |
    <router-link :to="{path:`/user/${id}/posts`}">Posts</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "UserView",
  props:['id'],
  data() {
    return {

    }
  },
}
</script>

<style scoped>

</style>