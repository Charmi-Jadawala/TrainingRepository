<template>
  <div>
    <HeaderComponent></HeaderComponent>
    <HomeComponent></HomeComponent>
    <AboutComponent></AboutComponent>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import HeaderComponent from './components/Header.vue'
import HomeComponent from './components/Home.vue'
import AboutComponent from './components/About.vue'
import FooterComponent from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    FooterComponent
  }
}
</script>

<style>
*{
    box-sizing: border-box;
    padding: 0px;
    margin: 0px;
}
</style>
