<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/user/1">User1</router-link> |
      <router-link to="/user/2">User2</router-link> |
      <router-link to="/user-Tony">UserInfo</router-link> |
      <router-link :to="{name:'school',params:{schoolName:'BUCT'}}">School</router-link>  |
      <router-link to="/settings/email">email</router-link> |
      <router-link to="/settings/profile">profile</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
