import React from "react";

const Navbar = () => {
    return(
     <>
        <nav className="navbar navbar-expand-lg bg-dark">
          <div className="container-fluid">
                <a className="navbar-brand text-light" href="#">Wikipedia</a>
                 <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                   <span className="navbar-toggler-icon"></span>
                 </button>
             <nav className="navbar-nav container-fluid ">
                  <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav ">
                      <li className="nav-item">
                         <a className="nav-link active text-light" aria-current="page" href="#">About</a>
                      </li>
                      <li className="nav-item">
                         <a className="nav-link text-light" href="#">Services</a>
                      </li>
                      <li className="nav-item">
                         <a className="nav-link text-light" href="#">Contact</a>
                      </li>
                   </ul>
                  </div>
               </nav>
           </div>
         </nav>

     </>
    )
};

export default Navbar;