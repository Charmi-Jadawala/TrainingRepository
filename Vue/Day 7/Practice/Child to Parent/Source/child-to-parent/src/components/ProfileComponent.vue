<template lang="en">
    <div>
        <h1 class="my-3 text-center display-6 text-primary">Passing value from Child to Parent Component</h1>
        <div class="text-center">
            <form>
                <label for="Name" class="form-label fs-5">Enter your Name: </label>
                <input type="text" v-model="Name" name="Name" id="Name" class="mx-2 mb-3 form-control-sm text-primary" /><br />
                <button type="button" @click="passData()" class="btn btn-outline-primary ms-0 mx-2">Send Data</button>
            </form>
        </div> 
    </div>
</template>
<script>
export default {
    name: 'ProfileComponent',
    data() {
        return {
            Name: ""
        }
    },
    methods: {
        passData() {
            this.$emit("getValue", this.Name);
        }
    },
}
</script>
<style scoped></style>