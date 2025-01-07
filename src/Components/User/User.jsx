import { useLoaderData } from "react-router-dom";
import Users from "../Users/Users";
import  './User.css'


const User = () => {
    const user= useLoaderData()
   
    
    console.log(user)
    return (
        <div >
            <h1>Data length:{user.length}</h1>
            <h2>This is the user side</h2>
            <div className="user">
                {
                    user.map(users=><Users key={users.id} users={users}></Users>)
                }
            </div>
        </div>
    );
};

export default User;