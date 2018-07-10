import React from "react";
import Welcome from "../../Welcome";
import Banners from "../../Banners";


const Dashboard = () => {
    const Pages = ["My Info", "My Health", "My Notes", "About Us"];
    return(
        <div className="container">
        <Welcome/>
        {Pages.map(page => <Banners pageName={page}/>)}
        </div>
    );
}

export default Dashboard;