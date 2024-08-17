import React, { useState } from 'react'
import axios from 'axios'
import Sidebar from '../../components/Sidebar/Sidebar'
import Header from '../../components/Header'
// import RoomPopup from '../../components/RoomPopup'
import style from './problems.module.css'


export default function Problems() {
  const [selectedItem,setselectedItem] = useState('Tat ca') 
  const noFloor = 3, noRoom = 13, problems = [{
    title: 'Bong dien hong',
    comment: 'Bong dien phong toi bi hong',
    tenantId: '1232314213',
    isHandled: false,
    handlementStatus: 'Sent',
    dateOfComment: '12/12/2023',
    dateOfHandlement: '',
  },
  {
    title: 'Voi nuoc hong',
    comment: 'Voi nuoc phong toi bi hong',
    tenantId: '2838921938',
    isHandled: false,
    handlementStatus: 'Sent',
    dateOfComment: '12/12/2023',
    dateOfHandlement: '',
  },
  ]

  return (
    <div class="d-flex justify-content-evenly align-items-center" style={{ height: '100vh', width: '100vw' }}>
      {/* <Header /> */}
      {/* <Sidebar /> */}

      <div class='position-relative shadow p-3 mb-5 bg-body-tertiary  rounded p-3 d-flex flex-column ' style={{ width: '80vw' }}>
        <div style={{ fontSize: '25px' }}>
          <i class="bi bi-pencil-square bi-lg position-absolute top-0 end-0 m-3"></i>
        </div>
        <table class="table table-bordered mt-5">
          <thead>
            <tr>
              <th scope="col" class="text-center align-middle " style={{ width: '5%' }}>STT</th>
              <th scope="col" class="text-center align-middle " >Nguoi gui</th>
              <th scope="col" class="text-center align-middle " style={{ width: '5%' }}>Phong</th>
              <th scope="col" class="text-center align-middle ">Noi dung</th>
              <th scope="col" class="text-center align-middle d-flex justify-content-center align-items-center" >Trang thai 
              <div class="dropdown dropdown-center m-0 ms-2">
                      <button class="btn btn-outline-warning dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        {selectedItem}
                      </button>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" onClick={()=>setselectedItem('Da gui')}>Da gui</a></li>
                        <li><a class="dropdown-item" onClick={()=>setselectedItem('Da tiep nhan')}>Da tiep nhan</a></li>
                        <li><a class="dropdown-item" onClick={()=>setselectedItem('Da xu ly')}>Da xu ly</a></li>
                        <li><hr class="dropdown-divider"/></li>
                        <li><a class="dropdown-item" onClick={()=>setselectedItem('Tat ca')}>Tat ca</a></li>
                      </ul>
                    </div>
              </th>
              <th scope="col" class="text-center align-middle " >Ngay gui</th>
              <th scope="col" class="text-center align-middle " >Ngay hoan tat</th>
            </tr>
          </thead>
          <tbody class="table-group-divider">
            {
              problems.map((problem, i) => (
                <tr key={i} class="text-center align-middle " >
                  <th scope="row" class="text-center align-middle ">{i + 1}</th>
                  <td >{problem.tenantId}</td>
                  <td >101</td>
                  <td >{problem.title} {problem.comment}</td>
                  <td >
                    <div class="dropdown">
                      <button class="btn btn-warning dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        {problem.handlementStatus}
                      </button>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item">Da tiep nhan</a></li>
                        <li><a class="dropdown-item">Da xu ly</a></li>

                      </ul>
                    </div>
                  </td>
                  <td >{problem.dateOfComment}</td>
                  <td >{problem.dateOfHandlement}</td>
                </tr>
              ))
            }


          </tbody>
        </table>
      </div>
    </div>

  )
}
