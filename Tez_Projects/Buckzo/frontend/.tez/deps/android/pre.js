
        
        
        export default function(registerTezPage,preload){
            const payload = {"url":"/android","slots":{},"masterPageSlots":{},"tags":{"canonical":"http://localhost:3000/android"}}; 
            registerTezPage({
                components:{},
                masterPage:{},
                payload:payload,
                postScript: ()=>import("/tez/deps/android/post.js")
            })
        }    