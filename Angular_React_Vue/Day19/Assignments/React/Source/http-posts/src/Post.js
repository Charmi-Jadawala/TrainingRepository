import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Post() {
  const [post, setPost] = useState({
    id: 0,
    user_id: "",
    title: "",
    body: "",
  });
  const [id, setId] = useState(0);
  const [data, setData] = useState([]);
  const url = "https://gorest.co.in/public/v2/";
  const token = "3a82599d9b0164bff03f97c9aa4ca9a39d3c8d35aff8bac7c5e20fd3a92c2249";
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  };

  useEffect(() => {
    const getData = async () => {
      const posts = await axios(`${url}posts`, {headers});
      setData(posts.data);
      console.log(posts.data);
    };
    getData();
  }, []);

  function getChange(e){
    const name = e.target.name;
    const value = e.target.value;
    setPost((prevData) => { return { ...prevData, [name]: value } });
    console.log(post);
  }

  const onSubmit = () => {
    const newPost = {user_id: post.user_id, title: post.title, body: post.body}
    axios.post(`${url}posts`, newPost, {headers});
  };

  const getDetails = (postId, postData) => {
    setPost(postData);
    setId(postId);
  }

  const updatePost = () => {
    axios.put(`${url}posts/${id}`, post, {headers})
  }

  const deletePost = (deleteId) => {
    axios.delete(`${url}posts/${deleteId}`, {headers});
  }

  return (
    <div className="my-4">
      <div className="container w-50 mx-auto bg-light p-3">
        <h1 className="display-6 text-primary text-center mb-4">Post Form</h1>
        <form>
          <div className="input-group m-2">
            <span className="input-group-text text-primary">User ID:</span>
            <input
              type="number"
              name="user_id"
              id="id"
              value={post.user_id}
              onChange={getChange}
              className="form-control"
              placeholder="User ID"
            />
          </div>

          <div className="input-group m-2">
            <span className="input-group-text text-primary">Title:</span>
            <input
              type="text"
              name="title"
              value={post.title}
              onChange={getChange}
              className="form-control"
              placeholder="Post Title"
            />
          </div>

          <div className="input-group m-2">
            <span className="input-group-text text-primary">Body:</span>
            <input
              type="text"
              name="body"
              value={post.body}
              onChange={getChange}
              className="form-control"
              placeholder="Post Body"
            />
          </div>

          <div className="m-2 ms-2 mt-3 text-left">
            <button
              type="button"
              onClick={onSubmit}
              className="btn btn-primary mx-2"
            >
              Add Post
            </button>
            <button
              type="button"
              onClick={updatePost}
              className="btn btn-primary mx-2"
            >
              Update Post
            </button>
            <button type="reset" className="btn btn-primary mx-2">
              Clear
            </button>
          </div>
        </form>
      </div>
      <div>
        <h1 className="my-3 text-center display-4">Posts</h1>
        <div className="container">
          <div className="row">
            {data.map((item) => (
              <div className="col-4 mb-3">
                <div className="card m-2">
                  <div className="card-header text-center display-6 text-primary fs-2">
                    Post ID: {item.id}
                  </div>
                  <div className="card-body">
                    <p className="card-text text-secondary display-6 fs-3">
                      <em>User ID: {item.user_id}</em>
                    </p>
                    <h4 className="card-title">{item.title}</h4>
                    <p className="card-text">{item.body}</p>
                  </div>
                  <div className="card-footer text-center">
                    <button className="btn btn-primary mx-2" onClick={ () => {getDetails(item.id, item)} }>Edit Post</button>
                    <button className="btn btn-primary mx-2" onClick={ () => {deletePost(item.id)} }>
                      Delete Post
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
