<template lang="en">
    <div>
       <h1 class="display-5 text-primary text-center">Area of a Rectangle</h1>
        <div class="container mx-auto mt-2">
            <form action="">
                <label for="length" class="form-label fs-5">Enter Length of the Rectangle: </label>
                <input type="number" v-model="length" name="length" id="length" class="form-control-sm mx-2 text-primary mb-3" /><br />
                <label for="breadth" class="form-label fs-5">Enter Breadth of the Rectangle:</label>
                <input type="number" v-model="breadth" name="breadth" id="breadth" class="form-control-sm mx-2 text-primary mb-4" /><br />
                <button type="button" @click="area" class="btn btn-outline-primary ms-0 mx-2">Calculate Area</button>
                <button @click="clear" class="btn btn-outline-primary">Clear</button>
            </form>
            <h3 class="display-6 mt-3 mb-3 fs-3">Area of Rectangle: {{ result }}</h3>
        </div> 
    </div>
</template>
<script>
export default {
    name: 'RectangleArea',
    data() {
        return {
            length: 0,
            breadth: 0,
            result: 0
        }
    },
    methods: {
        area() {
            this.result = this.length * this.breadth;
        },

        clear() {
            this.length = 0,
            this.breadth = 0,
            this.result = 0
        }
    },
}
</script>
<style scoped>
    
</style>