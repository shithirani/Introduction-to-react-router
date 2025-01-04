import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Home = () => {
    return (
        <div>
           
           <h2>This is the home components 
            <Outlet></Outlet>
            <Header></Header>
           </h2>
        </div>
    );
};

export default Home;