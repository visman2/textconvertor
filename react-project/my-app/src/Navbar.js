import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar- ${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand text-primary" href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active text-primary" aria-current="page" href="/" >Home</a>
          </li>
          <li className="nav-item">
          {/* <a classNameName="nav-link" href="/">About</a>*/} 
          </li> 
        </ul>
    
         <div className={`form-check form-switch text-${props.mode=== 'light'?'dark':'light'}`}>
             <input onClick={props.toggleMode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
             <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable dark mode </label>
         </div>
         </div>
    </div>
  </nav>
  )
}
   Navbar.propTypes = {
    title : PropTypes.string.isRequired,
    Aboutus : PropTypes.string.isRequired
   }

   Navbar.defaultProps = {
    title : "title",
    Aboutus : "About"
   };