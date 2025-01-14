import { useLoaderData } from "react-router-dom";
import Posts from "../Posts/Posts";


const Post = () => {
    const post=useLoaderData()
    return (
        <div >
           <h1>post:{post.length}</h1> 
           <div className="user">
           {
            post.map(posts => <Posts key={posts.id} posts={posts}></Posts>)
        }
           </div>
        </div>
      
    );
};

export default Post;