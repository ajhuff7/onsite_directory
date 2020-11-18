import React from "react";
import "./style.css";


function Header() {
    return (
        <div>
            <div class="row">
                <div className="col-2 name" onClick={(event) =>
                    props.handleName(event)}>
                </div>
                <div className="col-2 email" onClick={(event) =>
                    props.handleEmail(event)}>
                </div>
                <div className="col-2 language" onClick={(event) =>
                    props.handleLanguage(event)}>
                </div>
                <div className="col-2 phone" onClick={(event) =>
                    props.handlePhone(event)}>
                </div>
                <div className="col-2 dob" onClick={(event) =>
                    props.handleDob(event)}>
                </div>
            </div>
        </div>


    );
}

export default Header;