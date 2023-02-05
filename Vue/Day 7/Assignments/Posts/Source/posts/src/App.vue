<template>
    <div>
        <PostList @getList="displayList($event)"></PostList>
        <h1 class="mt-3 mb-2 text-center display-3 text-primary">Liked Posts</h1>
        <div class="container text-center mt-2 mb-5">
            <a href="#" @click="showData()" class="display-4">{{ likes.length }}</a>

            <table v-if="dataVisibility" class="table my-4 table-striped table-hover text-primary">
                <caption></caption>
                <thead class="table-dark">
                    <tr>
                        <th>Post Name</th>
                        <th>Post Description</th>
                        <th>Posted Date</th>
                        <th>Posted Image URL</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(post, index) in likes" :key="index">
                        <td>{{ post.PostName }}</td>
                        <td>{{ post.PostDescription }}</td>
                        <td>{{ post.PostedDate }}</td>
                        <td>{{ post.PostedImage }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import PostList from './components/PostList.vue'

export default {
    name: 'App',

    components: {
        PostList
    },

    data() {
        return {
            dataVisibility: false,
            likes: []
        }
    },

    methods: {
        displayList(data) {
            this.likes = data;
        },
        showData() {
            this.dataVisibility = true;
        }
    },
}
</script>

<style></style>
