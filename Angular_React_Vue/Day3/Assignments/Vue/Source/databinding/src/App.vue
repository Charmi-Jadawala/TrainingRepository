<template>
  <div>
    <RectangleArea></RectangleArea>
    <LoginComponent></LoginComponent>
    <SignUp></SignUp>
  </div>
</template>

<script>
import RectangleArea from './components/Rectangle.vue'
import LoginComponent from './components/Login.vue'
import SignUp from './components/SignUp.vue'

export default {
  name: 'App',
  components: {
    RectangleArea,
    LoginComponent,
    SignUp
  }
}
</script>

<style></style>
