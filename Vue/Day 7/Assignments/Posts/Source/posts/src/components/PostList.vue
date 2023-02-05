<template lang="en">
    <div>
        <h1 class="my-3 text-center display-3 text-primary">Posts</h1>
        <div class="container">
            <div class="row">
                <div class="col-4 mb-3" v-for="(post, index) in postList" :key="PostName">
                    <div class="card m-2" style="width:400px">
                        <img class="card-img-top" v-bind:src=post.PostedImage alt="Card image" style="width:100%; height: 300px;">
                        <div class="card-body">
                            <h4 class="card-title">{{ post.PostName }}</h4>
                            <p class="card-text">{{ post.PostDescription }}</p>
                            <p class="card-text">{{ post.PostedDate }}</p>
                            <button class="btn btn-primary" @click="like(post.PostName)">Like</button>
                        </div>
                    </div>
                </div>         
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'PostList',

    data() {
        return {
            postList: [
                {
                    PostName: "Beach View",
                    PostDescription: "Beach View Description", 
                    PostedDate: "Jan 3, 2022",
                    PostedImage: "./assets/13_pexels-photo-3293148.jpeg"
                },
                {
                    PostName: "Nutritious Food",
                    PostDescription: "Nutritious Food Description", 
                    PostedDate: "Jan 22, 2022",
                    PostedImage: "./assets/food1.jpeg"
                },
                {
                    PostName: "Oceans",
                    PostDescription: "Oceans Description", 
                    PostedDate: "Feb 6, 2022",
                    PostedImage: "./assets/22ocean.jpg"
                },
                {
                    PostName: "Monuments",
                    PostDescription: "Monuments Description", 
                    PostedDate: "Feb 13, 2022",
                    PostedImage: "./assets/25_pexels-photo-397431.jpeg"
                },
                {
                    PostName: "Night Sky View",
                    PostDescription: "Night Sky Description", 
                    PostedDate: "Feb 27, 2022",
                    PostedImage: "./assets/5_pexels-photo-572897.jpeg"
                },
                {
                    PostName: "Red Roses",
                    PostDescription: "Red Roses Description", 
                    PostedDate: "Mar 2, 2022",
                    PostedImage: "./assets/17_pexels-pixabay-15239.jpg"
                },
                {
                    PostName: "Mountains",
                    PostDescription: "Mountains Description", 
                    PostedDate: "Mar 12, 2022",
                    PostedImage: "./assets/mountains.jpg"
                },
                {
                    PostName: "Lotus Temple",
                    PostDescription: "Lotus Temple Description", 
                    PostedDate: "Mar 16, 2022",
                    PostedImage: "./assets/21_pexels-photo-1098460.jpeg"
                }
            ],

            likeList: []
        }
    },

    methods: {
        like(value) {
            for(let i = 0; i < this.postList.length; i ++){
                if(this.postList[i].PostName == value){
                    this.likeList.push({
                        PostName: this.postList[i].PostName,
                        PostDescription: this.postList[i].PostDescription,
                        PostedDate: this.postList[i].PostedDate,
                        PostedImage: this.postList[i].PostedImage
                    });
                }
            }
            this.$emit("getList", this.likeList)
        }
    },
}
</script>
<style scoped></style>