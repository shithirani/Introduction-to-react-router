import { Link, useNavigate } from "react-router-dom";


const Posts = ({posts}) => {
  const {id,title}=posts;

  const nevigate=useNavigate();
  const postStayle={
    border:'2px solid green',
    padding:'10px',
    borderRadius:'25px',
    marginTop:'20px'
}
  const handleShowDetailBtn=()=>{
   nevigate(`/post/${id}`)
  }
    return (
        <div style={postStayle}>
        <h4>post of id:{id}</h4>
        <p>post of title:{title}</p>
        <Link to={`/post/${id}`}>posts details</Link>
        <Link to={`/post/${id}`}><button>show details</button></Link>
        <button onClick={handleShowDetailBtn}>show me details</button>
        </div>
    );
};

export default Posts;