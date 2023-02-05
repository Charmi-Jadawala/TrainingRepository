<template lang="en">
    <div>
       <h1 class="display-5 text-primary text-center m-1 mb-2">Maximum of two numbers</h1>
        <div class="container mx-auto">
            <form action="">
                <label for="num1" class="form-label fs-5">Enter first No.:</label>
                <input type="number" v-model="Num1" name="num1" id="num1" class="form-control-sm mx-2 text-primary mb-3" /><br />
                <label for="num2" class="form-label fs-5">Enter second No.:</label>
                <input type="number" v-model="Num2" name="num2" id="num1" class="form-control-sm mx-2 text-primary mb-3" /><br />
            </form>
            <h3 class="display-6 mt-1 fs-3">Maximum of {{ Num1 }} and {{ Num2 }}: 
                <p v-if="getMaxNo()">{{ Num1 }}</p>
                <p v-else>{{ Num2 }}</p>
            </h3>
        </div> 
    </div>
</template>
<script>
export default {
    name: 'MaxNumber',
    data() {
        return {
            Num1: 0,
            Num2: 0  
        }
    },
    methods: {
        getMaxNo(){
            if (this.Num1 >= this.Num2){
                return true;
            }
            else{
                return false;
            }
        }
    },
}
</script>
<style scoped></style>