
        import header from "/@/components/header.vue";import thankyou from "/@/components/thankyou.vue";
        import main from "/@/layouts/main.vue";
        export default function(registerTezPage,preload){
            const payload = {"url":"/thank-you","slots":{"default":[{"name":"thankyou","data":{"componentName":"thankyou"},"id":"0-thankyou"}]},"masterPageSlots":{"header":[{"name":"header","data":{"componentName":"header"},"id":"0-header"}],"footer":[{"name":"footer","data":{"componentName":"footer"},"id":"1-footer"}]},"tags":{"title":"Buckzo - Thank You","canonical":"http://localhost:3000/thank-you","metaTag":{}},"layoutName":"main"}; 
            registerTezPage({
                components:{"header":header,"thankyou":thankyou,},
                masterPage:{"main":main,},
                payload:payload,
                postScript: ()=>import("/tez/deps/thank-you/post.js")
            })
        }    