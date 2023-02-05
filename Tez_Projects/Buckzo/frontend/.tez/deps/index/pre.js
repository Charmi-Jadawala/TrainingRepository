
        import header from "/@/components/header.vue";import titleContentCenter from "/@/components/titleContentCenter.vue";import imageGalleryMenu from "/@/components/imageGalleryMenu.vue";import features from "/@/components/features.vue";
        import main from "/@/layouts/main.vue";
        export default function(registerTezPage,preload){
            const payload = {"url":"/","slots":{"default":[{"name":"titleContentCenter","data":{"title":"Buckzo Is One Of Best Web Design & Development Company","subTitle":"We create digital assets and we're focused on Web Technologies and Design, based on London, United Kingdom. We build creative & professional themes.","vueReferenceCode":"titleContentCenter"},"id":"0-titleContentCenter"},{"name":"imageGalleryMenu","data":{"componentName":"imageGalleryMenu","pagination":true,"dynamicSourcePath":"collections/categories"},"id":"1-imageGalleryMenu"},{"name":"features","data":{"vueReferenceCode":"features","titleContentMediaList":[{"title":"Branding","longText":"<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.</p>","vueReferenceCode":"Branding","icon":{},"image":{"name":"leaf-1432771-1211449.png","alternativeText":"leaf-1432771-1211449.png","caption":"leaf-1432771-1211449.png","width":256,"height":256,"formats":{"thumbnail":{"name":"thumbnail_leaf-1432771-1211449.png","hash":"thumbnail_leaf_1432771_1211449_28b99947d0","ext":".png","mime":"image/png","width":156,"height":156,"size":37.54,"url":"/uploads/thumbnail_leaf_1432771_1211449_28b99947d0.png"}},"hash":"leaf_1432771_1211449_28b99947d0","ext":".png","mime":"image/png","size":9.24,"url":"/uploads/leaf_1432771_1211449_28b99947d0.png","updatedAt":"2022-09-16T12:13:53.984Z"},"imageCollections":{},"video":{},"hoverIcon":{},"hoverImage":{},"otherMedias":{}},{"title":"Highly customizable","longText":"<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.</p>","vueReferenceCode":"Highly customizable","icon":{},"image":{"name":"helm-1507223-1279859.webp","alternativeText":"helm-1507223-1279859.webp","caption":"helm-1507223-1279859.webp","width":256,"height":256,"formats":{"thumbnail":{"name":"thumbnail_helm-1507223-1279859.webp","hash":"thumbnail_helm_1507223_1279859_56d5ee2e7c","ext":".webp","mime":"image/webp","width":156,"height":156,"size":13.74,"url":"/uploads/thumbnail_helm_1507223_1279859_56d5ee2e7c.webp"}},"hash":"helm_1507223_1279859_56d5ee2e7c","ext":".webp","mime":"image/webp","size":19.78,"url":"/uploads/helm_1507223_1279859_56d5ee2e7c.webp","updatedAt":"2022-09-16T12:13:54.015Z"},"imageCollections":{},"video":{},"hoverIcon":{},"hoverImage":{},"otherMedias":{}},{"title":"Responsive design","longText":"<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.</p>","vueReferenceCode":"Responsive design","icon":{},"image":{"name":"airplay-17-391553.png","alternativeText":"airplay-17-391553.png","caption":"airplay-17-391553.png","width":256,"height":256,"formats":{"thumbnail":{"name":"thumbnail_airplay-17-391553.png","hash":"thumbnail_airplay_17_391553_741f71b414","ext":".png","mime":"image/png","width":156,"height":156,"size":29.62,"url":"/uploads/thumbnail_airplay_17_391553_741f71b414.png"}},"hash":"airplay_17_391553_741f71b414","ext":".png","mime":"image/png","size":5.32,"url":"/uploads/airplay_17_391553_741f71b414.png","updatedAt":"2022-09-16T12:13:53.981Z"},"imageCollections":{},"video":{},"hoverIcon":{},"hoverImage":{},"otherMedias":{}}]},"id":"2-features"}]},"masterPageSlots":{"header":[{"name":"header","data":{"componentName":"header"},"id":"0-header"}],"footer":[{"name":"footer","data":{"componentName":"footer"},"id":"1-footer"}]},"tags":{"title":"Buckzo - Home","canonical":"http://localhost:3000/","metaTag":{}},"layoutName":"main"}; 
            registerTezPage({
                components:{"header":header,"titleContentCenter":titleContentCenter,"imageGalleryMenu":imageGalleryMenu,"features":features,},
                masterPage:{"main":main,},
                payload:payload,
                postScript: ()=>import("/tez/deps/index/post.js")
            })
        }    