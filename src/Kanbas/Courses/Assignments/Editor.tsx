export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name">Assignment Name</label>
            <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
            <textarea id="wd-description">
        The assignment is available online Submit a link to the landing page of
      </textarea>
            <br />
            <table>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" value={100}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label htmlFor="wd-group">Assignment Group</label>
                    </td>
                    <td>
                        <select id="wd-group">
                            <option>ASSIGNMENTS</option>
                            <option>QUIZZES</option>
                            <option>EXAMS</option>
                            <option>PROJECTS</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-display-grade-as">Display Grade as</label>
                    </td>
                    <td>
                        <select id="wd-display-grade-as">
                            <option>Percentage</option>
                            <option>Letter Grades</option>
                            <option>Pass/Fail</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type">Submission Type</label>
                    </td>
                    <td>
                        <select id="wd-submission-type">
                            <option>Online</option>
                            <option>Offline?</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td/>
                    <td>
                        <label>Online Entry Options</label> <br/>
                        <input type="radio" name="submission type" id="wd-text-entry"/>
                        <label htmlFor="wd-text-entry">Text Entry</label> <br/>
                        <input type="radio" name="submission type" id="wd-website-url"/>
                        <label htmlFor="wd-website-url">Website URL</label> <br/>
                        <input type="radio" name="submission type" id="wd-media-recordings"/>
                        <label htmlFor="wd-media-recordings">Media Recordings</label> <br/>
                        <input type="radio" name="submission type" id="wd-student-annotation"/>
                        <label htmlFor="wd-student-annotation">Student Annotation</label> <br/>
                        <input type="radio" name="submission type" id="wd-file-upload"/>
                        <label htmlFor="wd-file-upload">File Upload</label>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">Assign</td>
                    <td>
                        <label htmlFor="wd-assign-to">Assign to</label> <br/>
                        <input type="text" id="wd-assign-to" defaultValue="Everyone"/>
                    </td>
                </tr>
                <tr>
                    <td/>
                    <td>
                        <label htmlFor="wd-due-date">Due</label><br/>
                        <input type="date" id="wd-due-date"/>
                    </td>
                </tr>
                <tr>
                    <td></td>

                    <table>
                        <tr>
                            <td>
                                <label htmlFor="wd-available-from">Available from</label>
                            </td>
                            <td>
                                <label htmlFor="wd-available-until">Until</label>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="date" id="wd-available-from"/>
                            </td>
                            <td>
                                <input type="date" id="wd-available-until"/>
                            </td>
                        </tr>
                    </table>
                </tr>
            </table>
        </div>
);
}
