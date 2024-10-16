import {FaPlus} from "react-icons/fa6";
import {FaSearch} from "react-icons/fa";
import {BsGripVertical} from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import {BiBible} from "react-icons/bi";
import {useParams} from "react-router-dom";
import {assignments} from "./../../Database";

export default function Assignments() {
    const { cid } = useParams();
    return (
        <div id="wd-assignments">
            <div className="d-flex justify-content-between align-items-center mb-2">
                <div className="input-group" style={{maxWidth: "400px"}}>
                    <span className="input-group-text">
                        <FaSearch/>
                    </span>
                    <input
                        id="wd-search-assignment"
                        placeholder="Search for Assignments"
                        className="form-control"
                    />
                </div>
                <div className={"d-flex"}>
                    <button id="wd-add-assignment-group"
                            className="btn btn-lg btn-secondary me-1 d-flex align-items-center">
                        <FaPlus className="fs-5 me-2"/> Group
                    </button>
                    <button id="wd-add-assignment" className="btn btn-lg btn-danger me-1 d-flex align-items-center">
                        <FaPlus className="fs-5 me-2"/> Assignment
                    </button>
                </div>
            </div>
            <h3 id="wd-assignments-title"
                className="d-flex mb-0 justify-content-between align-items-center bg-light text-dark p-2" >
                <div className="d-flex align-items-center">
                    <BsGripVertical className="me-2 fs-3"/>
                    <span className="me-2 fs-6">&#9660;</span>
                    ASSIGNMENTS
                </div>

                <div>
                    <div
                        className="d-inline-flex align-items-center justify-content-center border border-dark rounded-pill px-3 py-2 me-3">
                        <span className="fs-6"> 40% of Total</span>
                    </div>
                    <FaPlus className="me-3 fs-5"/>
                </div>
            </h3>

            <ul id="wd-assignment-list" className="list-group rounded-0 border border-muted">
                {assignments.filter( (assignment) => assignment.course === cid)
                    .map( (assignment) => (
                        <li className="wd-assignment-list-item d-flex justify-content-between align-items-center text-dark p-2 border border-muted">
                            <div className="d-flex justify-content-between align-items-center text-dark p-2">
                                <BsGripVertical className="me-2 fs-3"/>
                                <BiBible className="me-3 fs-3 text-success"/>
                                <div>
                                    <a
                                        className="wd-assignment-link h5 text-decoration-none"
                                        href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                                    >
                                        {assignment.title}
                                    </a>
                                    <br/>
                                    <small>
                                        <span className="text-danger">Multiple Modules</span> |
                                        <b> Not available until</b> May 20 at 12:00am |
                                        <b> Due</b> May 27 at 11:59pm |
                                        100 pts
                                    </small>
                                </div>
                            </div>
                            <LessonControlButtons/>
                        </li>
                    ))}
            </ul>
        </div>
    );
}
