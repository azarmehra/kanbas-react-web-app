import { Link } from "react-router-dom";
import React from "react";
export default function A1(){
    return (
        <div>
            <h1>Amir Azarmehr, CS 5610, Section 03 </h1>
            <Link to="/Kanbas/"> Kanbas</Link>
            <br/>
            <Link to="/Kanbas/Courses/1234/Assignments">3.7 Assignments Screen</Link>
            <br/>
            <Link to="/Kanbas/Courses/1234/Assignments/123">3.8 Assignment Editor Screen</Link>
            <br/>
            <Link to="https://github.com/azarmehra/kanbas-react-web-app" id="wd-github">Repo</Link>
        </div>
    );
}