<template>
  <AlphabetsComponent></AlphabetsComponent>
</template>

<script>
import AlphabetsComponent from './components/AlphabetsComponent.vue'

export default {
  name: 'App',
  components: {
    AlphabetsComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  margin-top: 60px;
}
</style>
