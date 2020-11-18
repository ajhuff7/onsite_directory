import React from "react";
import "./style.css";


function Header(props) {
    return (
        <div className="container">
            <div class="row">
                <div className="col image"></div>
                
                <div className="col link name" onClick={(event) =>
                    props.handleName(event)}>
                    <p className="name text-warning">NAME</p>
                </div>
                <div className="col link email" onClick={(event) =>
                    props.handleEmail(event)}>
                    <p className="email text-warning">EMAIL</p>
                </div>
                <div className="col link language" onClick={(event) =>
                    props.handleLanguage(event)}>
                    <p className="language text-warning">LANGUAGE</p>
                </div>
                <div className="col phone">
                    <p className="phone text-warning">PHONE</p>
                </div>
                <div className="col dob">
                    <p className="dob text-warning">DOB</p>
                </div>
            </div>
        </div>

    );
}

export default Header;