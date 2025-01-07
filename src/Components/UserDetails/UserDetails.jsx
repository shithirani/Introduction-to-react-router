import { useLoaderData, useRouteLoaderData } from "react-router-dom";


const UserDetails = () => {
    const users=useLoaderData();
    const{name,website}=users
    return (
        <div>
            <h1>hi ,i am from userDetals:{name}</h1>
            <p>website:{website}</p>
        </div>
    );
};

export default UserDetails;