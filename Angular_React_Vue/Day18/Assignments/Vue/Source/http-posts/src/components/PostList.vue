<template lang="en">
  <div>
    <h1 class="my-3 text-center display-4">Posts</h1>
    <div class="container">
      <div class="row">
        <div class="col-4 mb-3" v-for="(post, index) in posts" :key="index">
          <div class="card m-2" style="width: 400px">
            <div class="card-header text-center display-6 text-primary fs-2">
              Post ID: {{ post.id }}
            </div>
            <div class="card-body">
              <p class="card-text text-secondary display-6 fs-3">
                <em>User ID: {{ post.user_id }}</em>
              </p>
              <h4 class="card-title">{{ post.title }}</h4>
              <p class="card-text">{{ post.body }}</p>
            </div>
            <div class="card-footer text-center">
              <button class="btn btn-primary mx-2" @click="updatePost(post, post.id)" >Edit Post</button>
              <button class="btn btn-primary mx-2" @click="deletePost(post.id)">Delete Post</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "PostList",
  data() {
    return {
      url: "https://gorest.co.in/public/v2/",
      accessToken: "cb434a80c95f5e8698c50cae96f8cb4c7b5da617356b72d58c96a28d7407eb99"
    }
  },
  props: {
    posts: Array
  },
  methods: {
    updatePost(postData, postID) {
      this.$emit("selectedPost", postData);
      this.$emit("selectedId",postID);
    },
    async deletePost(postId) {
      let getUpdatedData = await axios.delete(`${this.url}posts/${postId}`, {headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.accessToken}`
        }
      });
      console.log(getUpdatedData.data);
    },
  },
};
</script>
<style scoped></style>
