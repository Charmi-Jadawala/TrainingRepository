<template>
  <div>
    <MaxNumber></MaxNumber>
    <EvenNumbers></EvenNumbers>
  </div>
</template>

<script>
import MaxNumber from './components/MaxNumber.vue'
import EvenNumbers from './components/EvenNumber.vue'

export default {
  name: 'App',
  components: {
    MaxNumber,
    EvenNumbers
  }
}
</script>

<style></style>
