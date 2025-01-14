

const Posts = ({posts}) => {
  const {id,title}=posts
  const postStayle={
    border:'2px solid green',
    padding:'10px',
    borderRadius:'25px',
    marginTop:'20px'
}
    return (
        <div style={postStayle}>
        <h4>post of id:{id}</h4>
        <p>post of title:{title}</p>
        </div>
    );
};

export default Posts;