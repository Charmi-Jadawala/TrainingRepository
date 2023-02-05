
        import header from "/@/components/header.vue";import titleContentCenter from "/@/components/titleContentCenter.vue";import imageGalleryMenu from "/@/components/imageGalleryMenu.vue";
        import main from "/@/layouts/main.vue";
        export default function(registerTezPage,preload){
            const payload = {"url":"/work","slots":{"default":[{"name":"titleContentCenter","data":{"title":"See our Works","subTitle":"We create digital assets and we're focused on Web Technologies and Design, based on London, United Kingdom. We build creative & professional themes.","vueReferenceCode":"titleContentCenter"},"id":"0-titleContentCenter"},{"name":"imageGalleryMenu","data":{"componentName":"imageGalleryMenu","pagination":true,"dynamicSourcePath":"collections/categories"},"id":"1-imageGalleryMenu"}]},"masterPageSlots":{"header":[{"name":"header","data":{"componentName":"header"},"id":"0-header"}],"footer":[{"name":"footer","data":{"componentName":"footer"},"id":"1-footer"}]},"tags":{"title":"Buckzo - Work","canonical":"http://localhost:3000/work","metaTag":{}},"layoutName":"main"}; 
            registerTezPage({
                components:{"header":header,"titleContentCenter":titleContentCenter,"imageGalleryMenu":imageGalleryMenu,},
                masterPage:{"main":main,},
                payload:payload,
                postScript: ()=>import("/tez/deps/work/post.js")
            })
        }    