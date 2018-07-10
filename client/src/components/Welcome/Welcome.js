import React from "react";

const Welcome = props => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">LifeHawk</a>    

            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                <a className="nav-link" href="#">logout<span className="sr-only">(current)</span></a>
                </li>
            </ul>
    
    </nav>
);

export default Welcome;
