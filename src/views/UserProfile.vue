<template>
  <div>
    <ul>
      <li v-for="(value,key) in userProfile" :key="key">{{ value }}:{{ key }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "UserProfile",
  data() {
    return {
      userProfile: {
        name: 'Tony',
        age: '18',
        gender: '男'
      }
    }
  }
}
</script>

<style scoped>

</style>