import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import Sidebar from '../../components/Sidebar/Sidebar'
import Header from '../../components/Header'
// import RoomPopup from '../../components/RoomPopup'
import style from './rooms.module.css'
import { AppContext } from '../../AppContext'
import AddRoomPopup from '../../components/AddRoomPopup'
import api from '../../api'

export default function Rooms() {
  const [popup, setPopup] = useState(false)
 
  const [addRoomPopupVisible, setAddRoomPopupVisible] = useState(false)
  const [popupData, setPopupData] = useState(null)
  const { acc, setAcc, selectedBuilding, rooms,setRooms ,floor,setFloor} = useContext(AppContext)

  useEffect((req,res)=>{
    api.get(`/room/${selectedBuilding._id}`)
      .then(response=>{
        setRooms(response.data.rooms)
      })
  },[])

  const RoomPopup = ({ room }) => {
    return (
      room && (

        <div class='position-absolute top-50 start-50 translate-middle 
        shadow p-3 mb-5 bg-body-tertiary  rounded p-3 d-flex  flex-column
        justify-content-around flex-wrap'
          style={{ height: '40vh', width: '60vw', zIndex: '999' }}>
          <div class='d-flex justify-content-around'>
            <button className="btn btn-warning " style={{ height: '20%', width: '20%' }}>{room.roomName}</button>
            <button className="btn btn-warning position-absolute top-0 start-100 translate-middle rounded-circle"
              onClick={() => setPopup(false)}
            >X</button>

            <div class='d-flex flex-column ms-2'>
              <p>Ten nguoi thue </p>
              <p>0912323123</p>
              <p>Thoi han: 3 thang</p>
            </div>

            <div class='d-flex flex-column ms-4'><p>Tien dien: 321 231 d</p>
              <p>Tien nuoc: 123 342 d</p>
              <p>Con no: 0 dong</p>
            </div>
          </div>

          <div class='d-flex justify-content-around'>
            <button className="btn btn-warning " >Gia han hop dong</button>
            <button className="btn btn-warning " >Cham dut hop dong</button>
            <button className="btn btn-warning " >Xuat hoa don</button>

          </div>
        </div>
      )
    )
  }
  const hideAddRoomPopup = () => setAddRoomPopupVisible(false)
  const floors = Array.from({ length: selectedBuilding.noFloor }, (__, index) => selectedBuilding.noFloor - index)
  const handlePopup = (room) => {
    setPopupData(room)
    setPopup(true)
  }
  return (
    <div class="d-flex justify-content-evenly align-items-center" style={{ height: '100vh', width: '100vw' }}>
      {/* <Header /> */}
      {/* <Sidebar /> */}
      <AddRoomPopup isVisible={addRoomPopupVisible} onClose={hideAddRoomPopup}/>
      {popup && <RoomPopup room={popupData} />}
      <div class='position-relative shadow p-3 mb-5 bg-body-tertiary  rounded p-3 d-flex flex-column '
       style={{ width: '80vw' }}>

        <table class="table table-bordered mt-5">
          <thead>
            <tr>
              <th scope="col" class="text-center align-middle w-10" style={{ width: '5%' }}>Tang</th>
              <th colspan='3' class="text-center align-middle w-90">Phong
              </th>
              <th scope="col" class="text-center align-middle w-10" style={{ width: '3%' }}></th>

            </tr>
          </thead>
          <tbody class="table-group-divider">
            {
              floors.map(i => (
                <tr key={i}  >
                  <th scope="row" class="text-center align-middle ">{i}</th>
                  {
                    rooms.filter((room, index) =>
                      room.floor === i
                    ).map((room, index) => (
                      <td
                        style={!room.isRented ? { backgroundColor: '#e1e1e1' } : {}}
                        className={style.cell}
                        onClick={() =>{setFloor(i); handlePopup(room)}}
                      >
                        <div class='d-flex align-items-center'>
                          <button className="btn btn-warning " style={{ height: '50%' }}>{room.roomName}</button>
                          <div class='d-flex flex-column ms-2'>
                            <p>Ten nguoi thue </p>
                            <p>0912323123</p>
                          </div></div>

                      </td>
                    ))
                  }
                  <td scope="row" class={`text-center align-middle ${style.cell}`}
                    onClick={() => {
                      setFloor(i)
                      setAddRoomPopupVisible(true)}}
                  >+</td>

                </tr>
              ))
            }
            <tr >
              <th scope="row" class={`text-center align-middle ${style.cell}`}>+</th>

            </tr>
          </tbody>
        </table>
      </div>
    </div>

  )
}
