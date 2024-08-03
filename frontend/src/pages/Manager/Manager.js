import React, { useState } from 'react'
import axios from 'axios'
import Sidebar from '../../components/Sidebar/Sidebar'
import Header from '../../components/Header'

export default function Manager() {
    const noFloor = 3, noRoom = 13, rooms = [
        { roomName: '101', floor: 1, status: true },
        { roomName: '102', floor: 1, status: true },
        { roomName: '103', floor: 1, status: false },
        { roomName: '201', floor: 2, status: true },
        { roomName: '202', floor: 2, status: false },
        { roomName: '203', floor: 2, status: true },
        { roomName: '301', floor: 3, status: true },
        { roomName: '302', floor: 3, status: false },
    ]
    const floors = Array.from({ length: noFloor }, (__, index) => noFloor - index)
    return (
        <div class='container-fluid d-flex flex-wrap justify-content-center align-items-center' style={{ padding: '12vh' }}>
            <Header />
            <Sidebar />
            <div class='shadow-lg p-3 mb-5 bg-body-tertiary  rounded p-3 d-flex flex-column justify-content-center' style={{ height: '40vh', width: '35vw', marginRight: '2vw' }}>
                <h3>Ten Toa Nha</h3>
                <h2>Dia chi: Nguyen Van Troi</h2>
                <h2>So tang: 7</h2>
                <h2>So phong: 123</h2>
            </div>
            <div class='shadow p-3 mb-5 bg-body-tertiary  rounded p-3 d-flex flex-column justify-content-center' style={{ height: '40vh', width: '35vw' }}>
                <h3>Ten Toa Nha</h3>
                <h2>Dia chi: Nguyen Van Troi</h2>
                <h2>So tang: 7</h2>
                <h2>So phong: 123</h2>
            </div>
            <div class=' shadow p-3 mb-5 bg-body-tertiary  rounded p-3 d-flex flex-column justify-content-center' style={{ height: '40vh', width: '72vw' }}>
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col" class="text-center align-middle">Tang</th>
                            <th colspan='3' class="text-center align-middle">Phong</th>

                        </tr>
                    </thead>
                    <tbody class="table-group-divider">
                        {
                            floors.map(i => (
                                <tr key={i}>
                                    <th scope="row" class="text-center align-middle">{i}</th>
                                    {
                                        rooms.filter((room, index) =>
                                            room.floor === i
                                        ).map((room, index) => (
                                            <td class='text-center align-middle'
                                            style={room.status? {backgroundColor:' #ffc107'}:{}}
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