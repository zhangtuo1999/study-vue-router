<template>
  <div>
    <h1>UserName:{{ currentName }}</h1>
  </div>
</template>

<script>
export default {
  name: "UserInfo",
  created() {
    this.currentName = this.$route.params.pathMatch
  },
  data() {
    return {
      currentName: ''
    }
  }
}
</script>

<style scoped>

</style>