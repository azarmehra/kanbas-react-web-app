import {Link} from "react-router-dom";
import {useLocation} from "react-router";

export default function CoursesNavigation() {
    const {pathname} = useLocation();
    return (
        <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
            <Link to="/Kanbas/Courses/1234/Home" className={`list-group-item border border-0
                ${pathname.includes("Home") ? "active" : "text-danger"}`} >
                Home</Link>
            <Link to="/Kanbas/Courses/1234/Modules" className={`list-group-item border border-0
                ${pathname.includes("Modules") ? "active" : "text-danger"}`} >
                Modules</Link>
            <Link to="/Kanbas/Courses/1234/Piazza" className={`list-group-item border border-0
                ${pathname.includes("Piazza") ? "active" : "text-danger"}`} >
                Piazza</Link>
            <Link to="/Kanbas/Courses/1234/Zoom" className={`list-group-item border border-0
                ${pathname.includes("Zoom") ? "active" : "text-danger"}`} >
                Zoom</Link>
            <Link to="/Kanbas/Courses/1234/Assignments" className={`list-group-item border border-0
                ${pathname.includes("Assignments") ? "active" : "text-danger"}`} >
                Assignments</Link>
            <Link to="/Kanbas/Courses/1234/Quizzes" className={`list-group-item border border-0
                ${pathname.includes("Quizzes") ? "active" : "text-danger"}`} >
                Quizzes</Link>
            <Link to="/Kanbas/Courses/1234/Grades" className={`list-group-item border border-0
                ${pathname.includes("Grades") ? "active" : "text-danger"}`} >
                Grades</Link>
            <Link to="/Kanbas/Courses/1234/People" className={`list-group-item border border-0
                ${pathname.includes("People") ? "active" : "text-danger"}`} >
                People</Link>
        </div>
    );
}
