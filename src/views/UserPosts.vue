<template>
  <div>
    <ul>
      <li v-for="(item,index) in userPosts" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "UserPosts",
  data() {
    return {
      userPosts: ['post1', 'post2', 'post3']
    }
  }
}
</script>

<style scoped>

</style>