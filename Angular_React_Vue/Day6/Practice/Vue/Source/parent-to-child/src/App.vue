<template>
    <div class="container mx-auto mt-3 text-center">
        <h1 class="display-6 fs-2 m-2">Passing Value from Parent to Child Compenent</h1>
        <input type="text" v-model="Name" class="form-control-sm m-2">
        <DisplayComponent staticData="This is a Static Data" v-bind:dynamicData="Name" class="display-6 fs-3 m-2"></DisplayComponent>
    </div>
</template>

<script>
import DisplayComponent from './components/DisplayComponent.vue'

export default {
    name: 'App',
    components: {
        DisplayComponent
    },
    data() {
      return {
          Name: ""
        }
    },
}
</script>

<style></style>
