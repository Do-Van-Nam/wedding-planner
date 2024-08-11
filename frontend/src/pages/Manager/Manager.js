import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import Sidebar from '../../components/Sidebar/Sidebar'
import Header from '../../components/Header'
import { AppContext } from '../../AppContext'
import api from '../../api'


export default function Manager() {
    const {selectedBuilding,rooms,setRooms} =useContext(AppContext)

    useEffect(()=>{
        api .get(`/room/${selectedBuilding._id}`)
        .then((response)=>
            setRooms(response.data.rooms)
        )
        .catch(error=>{
            console.log(error)
        }
        )
    },[selectedBuilding])
    const floors = Array.from({ length: selectedBuilding.noFloor }, (__, index) => selectedBuilding.noFloor - index)
    return (
        <div class='container-fluid d-flex flex-wrap justify-content-center align-items-center' style={{ padding: '12vh' }}>
            <Header />
            <Sidebar />
            <div class='shadow-lg p-3 mb-5 bg-body-tertiary  rounded p-3 d-flex flex-column justify-content-center' style={{ height: '40vh', width: '35vw', marginRight: '2vw' }}>
                <h3>{selectedBuilding.name}</h3>
                <h2>Dia chi: {selectedBuilding.address}</h2>
                <h2>So tang: {selectedBuilding.noFloor}</h2>
                <h2>So phong: {selectedBuilding.noRoom}</h2>
            </div>
            <div class='shadow p-3 mb-5 bg-body-tertiary  rounded p-3 d-flex flex-column justify-content-center' style={{ height: '40vh', width: '35vw' }}>
                <h3>Ten Toa Nha</h3>
                <h2>Dia chi: Nguyen Van Troi</h2>
                <h2>So tang: 7</h2>
                <h2>So phong: 123</h2>
            </div>
            <div class='position-relative shadow p-3 mb-5 bg-body-tertiary  rounded p-3 d-flex flex-column justify-content-center' style={{ height: '40vh', width: '72vw' }}>
            <div style={{fontSize:'25px'}}>
            <i class="bi bi-pencil-square bi-lg position-absolute top-0 end-0 m-3"></i>
            </div>
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col" class="text-center align-middle">Tang</th>
                            <th colSpan='3' class="text-center align-middle">Phong</th>

                        </tr>
                    </thead>
                    <tbody class="table-group-divider">
                        {
                            floors.map(i => (
                                <tr key={i}>
                                    <th scope="row" class="text-center align-middle" style={{width:'10%'}}>{i}</th>
                                    {
                                        rooms.filter((room, index) =>
                                            room.floor === i
                                        ).map((room, index) => (
                                            <td class='text-center align-middle'
                                            style={!room.isRented? {backgroundColor:'#e1e1e1'}:{}}
                                            >{room.roomName}</td>
                                        ))
                                    }
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>

        </div>
    )
}