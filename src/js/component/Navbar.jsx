import React from "react";

const Navbar = () => {
    return(
        <>
        <nav class="navbar navbar-expand-lg bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand text-light" href="#">Navbar</a>
    <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <nav class="navbar-nav container-fluid ">
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav ">
        <li class="nav-item">
          <a class="nav-link active text-light" aria-current="page" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light" href="#">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light" href="#">Contact</a>
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