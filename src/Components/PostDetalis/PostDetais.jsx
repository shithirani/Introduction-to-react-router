import { useLoaderData, useNavigate } from "react-router-dom";


const PostDetais = () => {
    const posts=useLoaderData()
    const{id,title,body}=posts;
    const nevigate=useNavigate();

    const handleGoBack=()=>{
nevigate(-1)
    }
    return (
        <div>
            <h1>post details:</h1>
            <h2>id:{id}</h2>
            <p>{title}</p>
            <h3>{body}</h3>
            <button onClick={handleGoBack}>Go back</button>
        </div>
    );
};

export default PostDetais;