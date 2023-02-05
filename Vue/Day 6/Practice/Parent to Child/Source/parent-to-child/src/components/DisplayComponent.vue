<template lang="en">
    <div>
       <h6 class="display-6 fs-4 text-primary">{{ staticData }}</h6> 
       <h6 class="display-6 fs-4 text-primary">Welcome {{ dynamicData }}</h6> 
    </div>
</template>
<script>
export default {
    name: 'DisplayComponent',
    props: {
        staticData: String,
        dynamicData: String
    }
}
</script>
<style scoped></style>