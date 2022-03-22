<template>
  <div>
    <h1>
      schoolName:{{ schoolName }}
    </h1>
  </div>
</template>

<script>
export default {
  name: "School",
  created() {
    this.schoolName = this.$route.params.schoolName
  },
  data() {
    return {
      schoolName: ''
    }
  }
}
</script>

<style scoped>

</style>