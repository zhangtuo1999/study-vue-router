<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="$router.push('/user/1')">跳转到User</button>
    <button @click="$router.push({path:'/'})">跳转到Home</button>
    <button @click="$router.push({name:'user',params:{id:'1'}})">跳转到User</button>
    <button @click="$router.push({path:'/user',params:{id:'1'}})">跳转到User</button>
    <button @click="$router.push({path:'/user',params:{id:'1'}})">跳转到User</button>
  </div>
</template>
<script>
export default {
  methods: {},

}
</script>
