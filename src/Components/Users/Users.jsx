import { Link } from "react-router-dom";


const Users = ({users}) => {
    const{id,name,email,phone}=users
    const usersStayle={
        border:'2px solid green',
        padding:'10px',
        borderRadius:'25px',
        marginTop:'20px'
    }

    return (
        <div style={usersStayle}>
           <h2>{name}</h2> 
           <p>email:{email}</p>
           <p>phone:{phone}</p>
           <Link to={`/users/${id}`}>view</Link>
        </div>
    );
};

export default Users;