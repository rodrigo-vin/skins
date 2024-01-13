<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HomePage msg="Welcome to Your Vue.js App"/>
  <LoginPage/>
</template>

<script>

import HomePage from './components/HomePage.vue'
import LoginPage from './components/LoginPage.vue'

export default {
  name: 'App',
  components: {
    HomePage,
    LoginPage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
