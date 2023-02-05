
        
        
        export default function(registerTezPage,preload){
            const payload = {"url":"/mockup","slots":{},"masterPageSlots":{},"tags":{"canonical":"http://localhost:3000/mockup"}}; 
            registerTezPage({
                components:{},
                masterPage:{},
                payload:payload,
                postScript: ()=>import("/tez/deps/mockup/post.js")
            })
        }    