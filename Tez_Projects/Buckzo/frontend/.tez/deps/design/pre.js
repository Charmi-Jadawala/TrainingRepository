
        
        
        export default function(registerTezPage,preload){
            const payload = {"url":"/design","slots":{},"masterPageSlots":{},"tags":{"canonical":"http://localhost:3000/design"}}; 
            registerTezPage({
                components:{},
                masterPage:{},
                payload:payload,
                postScript: ()=>import("/tez/deps/design/post.js")
            })
        }    