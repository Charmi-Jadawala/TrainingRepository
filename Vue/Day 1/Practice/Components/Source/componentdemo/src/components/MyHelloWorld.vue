<template lang="">
    <div>
       <h1>Greeting of the {{ me }} from MyHelloWorld Component...</h1> 
    </div>
</template>
<script>
export default {
    name: 'MyComponent',
    data() {
        return{
            me: "Charmi"
        }
    }
}
</script>
<style scoped>
    h1{
        font-family:'Times New Roman', Times, serif;
        color: blueviolet;
    }
</style>