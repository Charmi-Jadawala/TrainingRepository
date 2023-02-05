<template lang="en">
    <div class="my-footer">
        <p>&copy; 2022 Angular. All rights reserved.</p>
    </div>
</template>
<script>
export default {
    name: 'FooterComponent'
}
</script>
<style scoped>
    .my-footer{
    background-color: #6c757d;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: larger;
    font-weight: 600;
    height: 15vh;
    color: white;
    display: flex;
    justify-content: center;
    }

    .my-footer p{
        align-self: center;
    }
</style>