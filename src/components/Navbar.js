import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
    return (
      <div>
        <nav
          className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
        >
          <a className={`navbar-brand`} href="#">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              
            </ul>
            {/* <button
              className={`btn btn-${props.redMode ==="danger"?"light" : "danger"} my-2 my-sm-0`}
              type=""
              onClick={props.redMode}
            >
              Red mode
            </button>
            <button
              className={`btn btn-${props.goldenMode==="warning"?"light":"warning"} my-2 mx-2 my-sm-0`}
              type=""
              onClick={props.goldenMode}
            >
              {" "}
              Golden mode
            </button> */}
            <button
              className={`btn btn-${
                props.toggleMode === "dark" ? "light" : "dark"
              } text-capitalize
                 my-2 mx-2 my-sm-0`}
              type=""
              onClick={props.toggleMode}
            >
              {props.mode} mode
            </button>
          </div>
        </nav>
        
      </div>
    );
}
 
Navbar.propTypes = {title: PropTypes.string.isRequired};
Navbar.defaultProps = {
  title: "Title"
};
