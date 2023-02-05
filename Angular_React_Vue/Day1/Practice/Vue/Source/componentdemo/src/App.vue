<template>
  <div>
    <div>
      <h3>Hello World</h3>

        <header>
        <h2>Greeting of the Day !!!</h2>
        <h1>Welcome {{ myName }}</h1>
        </header>

        <form action="">
        <label for="fname">Enter your Name: </label>
        <input type="text" name="fname" id="fname" />
        </form>
    </div>

    <div>
        <MyComponent></MyComponent>
    </div>
  </div>
</template>

<script>
import MyComponent from './components/MyHelloWorld.vue'

export default {
  name: 'App',
  components: {
    MyComponent
  },
  data() {
    return {
      myName: "Charmi Jadawala"
    }
  }
}
</script>

<style>
#app {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #d545bf;
  margin-top: 30px;
}
h1{
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
</style>
