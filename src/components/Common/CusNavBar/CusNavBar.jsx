import React from 'react'
import './CusNavBar.css'
function CusNavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light pe-3">
    <div className="container-fluid">
      <a className="navbar-brand" >Green Field</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-lg-0">
          <li className="nav-item">
          Home
          </li>
          <li className="nav-item">
            Features
          </li>
         
          {/* <li className="nav-item">
            <a className="nav-link disabled"  tabindex="-1" aria-disabled="true">Disabled</a>
          </li> */}
        </ul>
        {/* <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form> */}
         <span className="nav-item dropdown me-5 dropdown-menu-end">
            <a className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              User Details
            </a>
            <ul className="dropdown-menu me-5" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item me-4" >Action</a></li>
              <li><a className="dropdown-item me-5" >Another action</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item me-4" >Something else here</a></li>
            </ul>
          </span>
      </div>
    </div>
  </nav>
  )
}

export default CusNavBar