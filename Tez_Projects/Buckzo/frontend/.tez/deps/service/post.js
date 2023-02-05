
        import footer from "/@/components/footer.vue";
        
        export default function(registerTezPage,preload){
            const payload = {"url":"/service","slots":{},"masterPageSlots":{"footer":[{"name":"footer","data":{"componentName":"footer"},"id":"1-footer"}]}}; 
            registerTezPage({
                components:{"footer":footer,},
                masterPage:{},
                payload:payload,
                
            })
        }    