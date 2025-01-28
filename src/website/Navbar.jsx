import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar(){
    return(
        <>
        <div className="container-fluid bg-white">
          <div className="row bg-white">
            <div className="col-md-12 p-4 bg-light">
            <nav class="navbar navbar-expand-lg bg-light custom-sticky">
              <img src="https://www.samatapat.com/images/logo.png" height={"100px"} width={"100px"}/>
              <img src="https://www.samatapat.com/admin/uploads/setting/samapat-name6544c0aa348d2.png"  height={"50px"} width={"280px"} className="ms-2"/>
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link text-dark text-uppercase  fw-bold active ms-4" aria-current="page" style={{"font-size":"15px"}} to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-dark text-uppercase  fw-bold ms-3" style={{"font-size":"15px"}} to="/about">AboutUs</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-dark text-uppercase  fw-bold ms-3" style={{"font-size":"15px"}} to="/deposit">Deposits</NavLink>
        </li> 
        <li className="nav-item">
          <NavLink className="nav-link text-dark text-uppercase  fw-bold ms-3" style={{"font-size":"15px"}} to="/loans">Loans</NavLink>
        </li> 
        <li className="nav-item">
          <NavLink className="nav-link text-dark text-uppercase  fw-bold ms-3" style={{"font-size":"15px"}} to="/services">Services</NavLink>
        </li> 
        
        <li className="nav-item">
          <NavLink className="nav-link text-dark text-uppercase  fw-bold ms-3" style={{"font-size":"15px"}} to="/contact">Contact</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-dark text-uppercase  fw-bold ms-3" style={{"font-size":"15px"}} to="/notice">Notice</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-dark text-uppercase  fw-bold ms-3" style={{"font-size":"15px"}} to="/gallery">Gallery</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-dark text-uppercase  fw-bold ms-3" style={{"font-size":"15px"}} to="/careers">Careers</NavLink>
        </li>

       
      </ul>
   
    </div>
  </div>
</nav>

            </div>
          </div>
          </div>




        
        </>
    )
}