import {Link} from "react-router-dom";

export default function Profile() {
    return (
        <div id="wd-profile-screen">
            <h3>Profile</h3>
            <input className="form-control mb-1" id="wd-username" value="alice" placeholder="username"/>
            <input
                className="form-control mb-1"
                id="wd-password"
                value="123"
                placeholder="password"
                type="password"
            />
            <input className="form-control mb-1" id="wd-firstname" value="Alice" placeholder="First Name"/>
            <input className="form-control mb-1" id="wd-lastname" value="Wonderland" placeholder="Last Name"/>
            <input className="form-control mb-1" id="wd-dob" value="2000-01-01" type="date"/>
            <input className="form-control mb-1" id="wd-email" value="alice@wonderland" type="email"/>
            <select className="dropdown mb-1" id="wd-role">
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
            </select>
            <br/>
            <a href="#/Kanbas/Account/Signin" className="btn btn-secondary">
                Sign Out
            </a>
        </div>
    );
}
