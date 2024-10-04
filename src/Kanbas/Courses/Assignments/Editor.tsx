export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor" style={{maxWidth: "800px"}}>
            <div className="mb-3 row">
                <label htmlFor="wd-name" className="col-sm-3 col-form-label text-sm-end">Assignment Name</label>
                <div className="col-sm-9">
                    <input type="text" className="form-control" id="wd-name" value="A1 - ENV + HTML"/>
                </div>
            </div>
            <textarea className="form-control" id="wd-description">
            The assignment is available online Submit a link to the landing page of
            </textarea>
            <br/>
            <div className="mb-3 row">
                <label htmlFor="wd-points" className="col-sm-3 col-form-label text-sm-end">Points</label>
                <div className="col-sm-9">
                    <input id="wd-points" className="form-control" value={100}/>
                </div>
            </div>
            <div className="mb-3 row">
                <label className="col-sm-3 col-form-label text-sm-end" htmlFor="wd-group">Assignment Group</label>
                <div className="col-sm-9">
                    <select id="wd-group" className="form-control">
                        <option>ASSIGNMENTS</option>
                        <option>QUIZZES</option>
                        <option>EXAMS</option>
                        <option>PROJECTS</option>
                    </select>
                </div>
            </div>
            <div className="mb-3 row">
                <label className="col-sm-3 col-form-label text-sm-end" htmlFor="wd-display-grade-as">Display Grade
                    as</label>
                <div className="col-sm-9">
                    <select id="wd-display-grade-as" className="form-control">
                        <option>Percentage</option>
                        <option>Letter Grades</option>
                        <option>Pass/Fail</option>
                    </select>
                </div>
            </div>
            <div className="mb-3 row">
                <label className="col-sm-3 col-form-label text-sm-end" htmlFor="wd-submission-type">Submission Type</label>
                <div className="col-sm-9">
                    <select id="wd-submission-type" className="form-control">
                        <option>Online</option>
                        <option>Offline?</option>
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-3"></div>
                <div className="col-sm-9">
                    <label className="form-label"> Online Entry Options</label>
                    <div className="form-check">
                        <input type="radio" className="form-check-input" name="submission type" id="wd-text-entry"/>
                        <label className="form-check-label" htmlFor="wd-text-entry">Text Entry</label> <br/>
                        <input type="radio" className="form-check-input" name="submission type" id="wd-website-url"/>
                        <label className="form-check-label" htmlFor="wd-website-url">Website URL</label> <br/>
                        <input type="radio" className="form-check-input" name="submission type"
                               id="wd-media-recordings"/>
                        <label className="form-check-label" htmlFor="wd-media-recordings">Media Recordings</label> <br/>
                        <input type="radio" className="form-check-input" name="submission type"
                               id="wd-student-annotation"/>
                        <label className="form-check-label" htmlFor="wd-student-annotation">Student Annotation</label>
                        <br/>
                        <input type="radio" className="form-check-input" name="submission type" id="wd-file-upload"/>
                        <label className="form-check-label" htmlFor="wd-file-upload">File Upload</label>
                    </div>
                </div>
            </div>

            <div className="row">
                <label className="col-sm-3 form-label text-sm-end">Assign</label>
                <div className="col-sm-9">
                    <label className="form-label" htmlFor="wd-assign-to">Assign to</label> <br/>
                    <input className="form-control mb-1" type="text" id="wd-assign-to" defaultValue="Everyone"/>
                    <label className="form-label" htmlFor="wd-due-date">Due</label><br/>
                    <input className="form-control mb-1" type="date" id="wd-due-date"/>
                    <div className="row">
                        <div className="col-sm-6">
                            <label className="form-label" htmlFor="wd-available-from">Available from</label>
                            <input className="form-control mb-1" type="date" id="wd-available-from"/>
                        </div>
                        <div className="col-sm-6">
                            <label className="form-label" htmlFor="wd-available-until">Until</label>
                            <input className="form-control mb-1" type="date" id="wd-available-until"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
