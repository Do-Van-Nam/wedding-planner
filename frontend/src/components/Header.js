import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../AppContext';
import axios from 'axios'
import api from '../api'
import { useNavigate } from 'react-router-dom'
import BuildingPopup from './BuildingPopup';
import Cookies from 'js-cookie'

export default function Header() {
  const navigate = useNavigate()

  const { acc, setAcc, buildings, setBuildings, selectedBuilding, setSelectedBuilding } = useContext(AppContext);
  const logOut = async () => {
    try {
      await api.post('/logout')
      localStorage.clear()
      setAcc({})
      navigate('/')
    } catch (error) {
      console.log(error)
    }

  }

  useEffect(() => {
    console.log(acc)
    if (acc && acc._id) {
      api.get(`/building/${acc._id}`)
        .then(response => {
          setBuildings(response.data.buildings)
          setSelectedBuilding(response.data.buildings[0])
        })
        .catch(error => {
          console.error('Error fetching buildings by Owner ID:', error);
        })
    }
  }, [acc?._id])

  useEffect(() => {
    try {
      api.get('/acc/check-auth')
        .then(response =>
          setAcc(response.data.user)
        )
        .catch(error => {
          navigate('/')
          console.log(error)
        }
        )
    } catch (error) {
      console.log(error)
    }
    console.log(acc)
  }, [])

  const [isPopupVisible, setPopupVisible] = useState(false)
  const hidePopup = () => setPopupVisible(false)
  const showPopup = () => setPopupVisible(true)

  return (
    <nav class="navbar fixed-top navbar-expand-lg bg-body-tertiary  
    shadow p-2 mb-5 bg-body-tertiary rounded
    " style={{ width: '100vw', zIndex: '999' }}>
      <BuildingPopup isVisible={isPopupVisible} type={'add'} onClose={hidePopup} />
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
              {selectedBuilding.name}
            </button>
            <ul class="dropdown-menu">
              {buildings.length > 0 && buildings.map(building => (
                <li key={building._id}
                  onClick={() => setSelectedBuilding(building)}
                ><a class="dropdown-item" >{building.name}</a></li>

              ))}

              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" onClick={showPopup}>+ Them khu nha</a></li>
            </ul>
            <div class="d-flex align-items-center ms-5 ">
              {/* <i class="bi bi-bell"></i> */}
              <i class="bi bi-bell-fill me-3 bi-lg" ></i>
              <div class='d-flex flex-column'>
                <p class="m-0" >{acc ? acc.phone : '123'}</p>
                <p class="m-0 fs-6" >{acc ? acc.role : 'some'}</p>
              </div>

              <div class="rounded-circle ms-2 me-2" alt="" style={{ height: '35px' }} >
                <i class="bi bi-person-circle bi-lg" style={{ fontSize: '25px' }}></i>
                <button class="btn btn-warning" onClick={logOut}>Dang xuat</button>

              </div>


            </div>
          </div>

        </div>
      </div>
    </nav>

  );
}
