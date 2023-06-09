import { Outlet } from "react-router-dom";
import { Navbar } from "../components/navbar";
import { Heroes } from "../components/heroes";

export const HomePage = () => {
    return (
        <div>
            <Navbar />
            <div className="home-container">
                <Heroes />
                {/* <Products /> */}
                <Outlet />
            </div>
        </div>
    );
};
