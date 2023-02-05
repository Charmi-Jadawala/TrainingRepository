<template lang="en">
    <div>
        <h1 class="display-5 text-primary text-center m-1">Even Numbers between 1 to 100</h1>
        <div class="container mx-auto text-center">
            <button @click="myArray()" class="btn btn-outline-primary mt-2 mb-4">Even Numbers</button><br />
            <span class="display-6 fs-4" v-for="(number, i) in evenNumbers" :key="number">
                {{ number }}&nbsp;&nbsp;
            </span>
        </div>
    </div>
</template>
<script>
export default {
    name: 'EvenNumbers',
    data() {
        return {
            evenNumbers: []
        }
    },
    methods: {
        myArray() {
            for(let i = 1; i <= 100; i ++){
                if(i % 2 == 0){
                this.evenNumbers.push(i);
                }
            }
        }
    },
}
</script>
<style scoped></style>