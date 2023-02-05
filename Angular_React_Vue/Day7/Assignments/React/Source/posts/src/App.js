import './App.css';
import { useState } from 'react';
import PostList from './PostList';

function App() {
    const [dataVisibility, setDataVisibility] = useState(false); 
    const [likes, setLikes] = useState([]);
    const [len, setLen] = useState(0);

    const displayList = (data) => {
        setLikes(data);
        //console.log(likes);
    }

    const displayLength = (lenData) => {
        setLen(lenData);
    }

    function showData() {
        setDataVisibility(true);
    }
    
    return (
        <div>
            <PostList getList={displayList} getLength={displayLength}></PostList>
            <h1 className="mt-3 mb-2 text-center display-4 text-primary">Liked Posts</h1>
            <div className="container text-center mt-2 mb-5">
                <a href='#' className="display-4" onClick={ showData }>{ len }</a>

                { dataVisibility && 
                (
                <table className="table my-4 table-striped table-hover text-primary">
                    <caption></caption>
                    <thead className="table-dark">
                        <tr>
                            <th>Post Name</th>
                            <th>Post Description</th>
                            <th>Posted Date</th>
                            <th>Posted Image URL</th>
                        </tr>
                    </thead>
                    <tbody>
                    { likes.map((post) => (
                        <tr key={post.PostName}>
                        <td>{ post.PostName }</td>
                        <td>{ post.PostDescription }</td>
                        <td>{ post.PostedDate }</td>
                        <td>{ post.PostedImage }</td>
                    </tr>
                    )) }
                    </tbody>
                </table>
                 )}
            </div>
        </div>
    );
}

export default App;
