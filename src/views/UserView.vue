<template>
  <div>
    <h1> userID： {{ currentID }}</h1>
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
}
</script>

<style scoped>

</style>