<template lang="en">
    <div class="my-header">
        <ul class="menus">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
        </ul>
    </div>   
</template>
<script>
export default {
    name: 'HeaderComponent'
}
</script>
<style scoped>
    .my-header{
    background-color: #1266F1;
    padding: 0 40px 0 40px;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: larger;
    font-weight: 600;
    }

    .menus{
        list-style: none;
        display: flex;
        justify-content:flex-start;
        gap: 100px;
        height: 15vh;
    }

    .menus li{
        align-self: center;
    }

    .menus li a{
        color: #ffffff; 
    }
</style>