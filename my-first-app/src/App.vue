<template>
<SideBar/>
<ContentWrapper/>
</template>

<script>
 // import HelloWorld from './components/HelloWorld.vue'
import SideBar from './components/SideBar.vue'
import ContentWrapper from './components/ContentWrapper'

export default {
  name: 'App',
  components: {
    // HelloWorld
    SideBar,
    ContentWrapper
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
  margin-top: 0px;
}
</style>
