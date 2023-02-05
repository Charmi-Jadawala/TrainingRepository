import { useCallback, useState } from "react";
import './PostList.css';

function PostList(props) {
    const postList = [
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
    ];

    const [likeList] = useState([]);

    const like = useCallback((value) => () => {
        for(let i = 0; i < postList.length; i ++){
            if(postList[i].PostName == value){
                likeList.push({
                    PostName: postList[i].PostName,
                    PostDescription: postList[i].PostDescription,
                    PostedDate: postList[i].PostedDate,
                    PostedImage: postList[i].PostedImage
                });
            }
        }
        //console.log(likeList);
        props.getList(likeList); 
        props.getLength(likeList.length);
    });

    return (
        <div>
            <h1 className="my-1 text-center display-4 text-primary">Posts</h1>
            <div className="container">
                <div className="row">
                    <div className="col-4 mb-3 mx-auto">
                        { postList.map((post) => (
                            <div className="card my-5" key={post.PostName}>
                                <img className="card-img-top" src={post.PostedImage} alt="Card image" />
                                <div className="card-body">
                                    <h4 className="card-title">{ post.PostName }</h4>
                                    <p className="card-text">{ post.PostDescription }</p>
                                    <p className="card-text">{ post.PostedDate }</p>
                                    <button className="btn btn-primary" onClick={like(post.PostName)}>Like</button>
                                </div>
                            </div>
                        )) }
                    </div>         
                </div>
            </div>
        </div>
    );
}

export default PostList;