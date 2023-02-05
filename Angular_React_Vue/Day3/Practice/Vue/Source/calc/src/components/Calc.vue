<template lang="en">
    <div>
        <h1 class="display-4 text-primary text-center">Calc</h1>
        <div class="container mx-auto">
            <form action="">
                <label for="num1" class="form-label fs-5">Enter first No.:</label>
                <input type="number" v-model="Num1" name="num1" id="num1" class="form-control-sm mx-2 text-primary mb-3" /><br />
                <label for="num2" class="form-label fs-5">Enter second No.:</label>
                <input type="number" v-model="Num2" name="num2" id="num1" class="form-control-sm mx-2 text-primary mb-4" /><br />
                <button type="button" @click="addition" class="btn btn-outline-primary ms-0 mx-2">Addition</button>
                <button type="button" @click="subtraction" class="btn btn-outline-primary mx-2">Subtraction</button>
                <button type="button" @click="multiplication" class="btn btn-outline-primary mx-2">Multiplication</button>
                <button type="button" @click="division" class="btn btn-outline-primary mx-2">Division</button>
            </form>
            <h3 class="display-6 mt-4 mb-3">{{ result }} </h3>

            <button @click="clear()" class="btn btn-outline-primary">Clear</button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'CalcComponent',
    data() {
        return{
            Num1: 0,
            Num2: 0,
            result: 0
        }
    },
    methods: {
         addition() {
            this.result = this.Num1 + this.Num2;
        },

        subtraction() {
            this.result = this.Num1 - this.Num2;
        },

        multiplication() {
            this.result = this.Num1 * this.Num2;
        },

        division() {
            this.result = this.Num1 / this.Num2;
        },

        clear() {
            this.Num1 = 0;
            this.Num2 = 0;
            this.result = 0;
        },
    },
};
</script>
<style scoped>
    
</style>