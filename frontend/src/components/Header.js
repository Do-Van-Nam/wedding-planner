import React from 'react';

export default function Header() {
  return (

    <nav class="navbar fixed-top navbar-expand-lg bg-body-tertiary  
      shadow p-2 mb-5 bg-body-tertiary rounded
      " style={{ width: '100vw',zIndex:999, overflow:'hiden' }}>
      <div class="container-fluid d-flex justify-content-between align-items-center">
        <a class="navbar-brand" href="#">Motelly</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse d-flex justify-content-between align-items-center" id="navbarSupportedContent " >
          <form class="d-flex ms-5" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-warning" type="submit">Search</button>
          </form>
          <div class="btn-group">
            <button type="button" class="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              Chung cu mini Ng Van Troi
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Chung cu 1</a></li>
              <li><a class="dropdown-item" href="#">Chung cu 2</a></li>
              <li><a class="dropdown-item" href="#">Chung cu 3</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">+ Them khu nha</a></li>
            </ul>
            <div class="d-flex align-items-center ms-5 ">
              {/* <i class="bi bi-bell"></i> */}
              <i class="bi bi-bell-fill me-3 bi-lg" ></i>
              <div class='d-flex flex-column'>
                <p class="m-0" >Account name</p>
                <p class="m-0 fs-6" >Role</p>
              </div>

              <img src='images/image.png' class="rounded-circle ms-2" alt="" style={{ height: '35px' }} />
            </div>
          </div>

        </div>
      </div>
    </nav>

  );
}
