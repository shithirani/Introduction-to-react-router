import { useLoaderData } from "react-router-dom";


const User = () => {
    const user= useLoaderData()
    return (
        <div>
            <h1>Data length:{user.length}</h1>
            <h2>This is the user side</h2>
        </div>
    );
};

export default User;