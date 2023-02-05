
        import header from "/@/components/header.vue";import titleContentCenter from "/@/components/titleContentCenter.vue";import blogs from "/@/components/blogs.vue";
        import main from "/@/layouts/main.vue";
        export default function(registerTezPage,preload){
            const payload = {"url":"/blog","slots":{"default":[{"name":"titleContentCenter","data":{"title":"News and Stories","subTitle":"Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Proin gravida nibh vel velit auctor Aenean sollicitudin, adipisicing elit sed lorem quis bibendum auctor.","vueReferenceCode":"titleContentCenter"},"id":"0-titleContentCenter"},{"name":"blogs","data":{"componentName":"blogs","pagination":true,"dynamicSourcePath":"collections/blogs"},"id":"1-blogs"}]},"masterPageSlots":{"header":[{"name":"header","data":{"componentName":"header"},"id":"0-header"}],"footer":[{"name":"footer","data":{"componentName":"footer"},"id":"1-footer"}]},"tags":{"title":"Buckzo - Blog","canonical":"http://localhost:3000/blog","metaTag":{}},"layoutName":"main"}; 
            registerTezPage({
                components:{"header":header,"titleContentCenter":titleContentCenter,"blogs":blogs,},
                masterPage:{"main":main,},
                payload:payload,
                postScript: ()=>import("/tez/deps/blog/post.js")
            })
        }    