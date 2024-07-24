import React from 'react';

export default function Header() {
  return (
   
      <nav class="navbar fixed-top navbar-expand-lg bg-body-tertiary d-flex justify-content-center align-items-center" style={{width:'100vw'}}>
        <div class="container-fluid ">
          <a class="navbar-brand" href="#">Motelly</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse d-flex justify-content-center align-items-center" id="navbarSupportedContent " >
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-warning" type="submit">Search</button>
            </form>
            {/* <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-auto d-flex justify-content-between">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" aria-disabled="true">Disabled</a>
              </li>
            </ul> */}
          
<div class="btn-group">
  <button type="button" class="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Chung cu mini Ng Van Troi
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Chung cu 1</a></li>
    <li><a class="dropdown-item" href="#">Chung cu 2</a></li>
    <li><a class="dropdown-item" href="#">Chung cu 3</a></li>
    <li><hr class="dropdown-divider"/></li>
    <li><a class="dropdown-item" href="#">+ Them khu nha</a></li>
  </ul>
</div>
            <div class="d-flex align-items-center">
            <p class="mb-0" >Account name</p>
            <img src="path/to/your-image.jpg" class="rounded-circle ms-2" alt="" style={{width:'10px',height:'70%',backgroundColor:'red'}}/>
            </div>
          </div>
        </div>
      </nav>
  
  );
}
