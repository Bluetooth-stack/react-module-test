import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from "../redux/actions/posts.action";
import { selectedPost } from "../redux/actions/selectedPost.action";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const { loading, data, error } = useSelector(state => state.posts);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchData())
    }, [dispatch])


    function clickHandle(post){
        dispatch(selectedPost(post))
        navigate(`/item/${post.id}`)
    }


    return (
        <div className="container">

            {
                loading &&
                <div className="load-holder">
                    <div className="load">
                    </div>
                </div>
            }
            {
                error &&
                <div className="error">
                    <h1>{error}</h1>
                </div>
            }
            {
                data.length > 0 &&
                data.map(post => (
                    <div className="card" key={post.id} onClick={()=>{clickHandle(post)}}>
                        <img src={`https://picsum.photos/200?random=${post.id}`} alt={post.title}></img>
                        <p><strong>User ID : </strong> {post.userId}</p>
                        <p><strong>Title : </strong> {post.title.substring(0,20)}...</p>
                        <p><strong>Body : </strong> <span>{post.body.substring(0,60)}...</span></p>
                    </div>
                ))

            }
        </div>
    )
}

export default Home;