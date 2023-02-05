import {defineTezConfig } from "@tezjs/vite"

export default defineTezConfig({
    client:{
        imports:['/@/assets/index.css'],
        loaderImage:'/images/loader.gif'
    },
    strapi: {
        apiUri: "http://localhost:1337"
    }
})