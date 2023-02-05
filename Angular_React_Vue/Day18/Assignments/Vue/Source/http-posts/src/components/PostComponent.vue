<template>
  <div class="my-4">
    <div class="container w-50 mx-auto bg-light p-3">
      <h1 class="display-6 text-primary text-center mb-4">Post Form</h1>
      <form>
        <div class="input-group m-2">
          <span class="input-group-text">User ID:</span>
          <input
            type="number"
            v-model="post.user_id"
            class="form-control"
            id="user_id"
            placeholder="User ID"
          />
        </div>

        <div class="input-group m-2">
          <span class="input-group-text">Title:</span>
          <input
            type="text"
            v-model="post.title"
            class="form-control"
            id="title"
            placeholder="Post Title"
          />
        </div>

        <div class="input-group m-2">
          <span class="input-group-text">Body:</span>
          <textarea
            v-model="post.body"
            class="form-control"
            id="body"
            rows="3"
            placeholder="Post Body"
          ></textarea>
        </div>

        <div class="m-2 mt-4 text-center">
          <button type="button" class="btn btn-primary mx-2" @click="addPost()">
            Create
          </button>
          <button type="button" class="btn btn-primary mx-2" @click="editPost()">
            Update
          </button>
          <button type="reset" class="btn btn-primary mx-2">Clear</button>
        </div>
      </form>
    </div>
    <div>
      <PostList v-bind:posts="postList" @selectedPost="updateFormData($event)" @selectedId="updateFormId($event)"></PostList>
    </div>
  </div>
</template>

<script>
import PostList from './PostList.vue';
import axios from 'axios';

export default {
  name: 'PostComponent',
    components: {
    PostList
  },
  data() {
    return {
      postList: [],
      url: "https://gorest.co.in/public/v2/",
      accessToken: "cb434a80c95f5e8698c50cae96f8cb4c7b5da617356b72d58c96a28d7407eb99",
      post: {
        "user_id": null,
        "title": "",
        "body": ""
      },
      postId: null
    }
  },
  async created() {
    let getData = await axios.get(`${this.url}posts`, {headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.accessToken}`
          }
        });
    console.log(getData.data);
    this.postList = getData.data;
  },
  methods: {
    async addPost() {
      let getUpdatedData = await axios.post(`${this.url}posts`, this.post, {headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.accessToken}`
        }
      });
      console.log(getUpdatedData.data);
      this.postList = getUpdatedData.data;
    },

    updateFormData(data) {
      this.post = data;
    },

    updateFormId(data) {
      this.postId = data;
    },

    async editPost() {
      let getUpdatedData = await axios.put(`${this.url}posts/${this.postId}`, this.post, {headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.accessToken}`
        }
      });
      console.log(getUpdatedData.data);
      this.postList = getUpdatedData.data;
    },
  },
}
</script>

<style scoped></style>
