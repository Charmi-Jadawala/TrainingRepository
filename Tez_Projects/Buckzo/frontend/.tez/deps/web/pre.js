
        
        
        export default function(registerTezPage,preload){
            const payload = {"url":"/web","slots":{},"masterPageSlots":{},"tags":{"canonical":"http://localhost:3000/web"}}; 
            registerTezPage({
                components:{},
                masterPage:{},
                payload:payload,
                postScript: ()=>import("/tez/deps/web/post.js")
            })
        }    