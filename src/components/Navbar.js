import React from 'react'
import PropTypes from 'prop-types'
import Excrsise2 from './Excrsise2'
import { Link } from 'react-router-dom'

function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.aboutText}</Link>
        </li>
       
      </ul>
      <div className={`form-check form-switch text-${props.mode ==='light' ? 'dark' : 'light'}`}>
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMenu} />
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>

  </div>
  {/* Excersise2 */}

  <div><Excrsise2/></div>
  </div>
    </div>
 
 
</nav>
  
  )
}
// props --> componet ma argument pass krese 

// propsType -->
//aama props ma value string ma j devani number ma  ke aema ny
Navbar.propTypes = {title:PropTypes.string, aboutText:PropTypes.string,}

// defaultProps -->
//by default props pass no kre tyare aa value render thy jay
Navbar.defaultProps = {
   title: "Set title here",
   aboutText: "About text here"
    
}


export default Navbar