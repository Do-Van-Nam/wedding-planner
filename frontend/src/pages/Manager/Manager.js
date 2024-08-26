import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import Sidebar from '../../components/Sidebar/Sidebar'
import Header from '../../components/Header'
import { AppContext } from '../../AppContext'
import api from '../../api'
import BuildingPopup from '../../components/BuildingPopup'

export default function Manager() {
    const { selectedBuilding, rooms, setRooms } = useContext(AppContext)
    const [editBuildingPopup, setEditBuildingPopup] = useState(false)
    const [deleteBuildingPopup, setDeleteBuildingPopup] = useState(false)
    useEffect(() => {
        api.get(`/room/${selectedBuilding._id}`)
            .then((response) =>
                setRooms(response.data.rooms)
            )
            .catch(error => {
                console.log(error)
            }
            )
    }, [selectedBuilding])
    const floors = Array.from({ length: selectedBuilding.noFloor }, (__, index) => selectedBuilding.noFloor - index)
    const hideEditBuildingPopup = () => {
        setEditBuildingPopup(false)
    }
    const hideDeleteBuildingPopup = () => {
        setDeleteBuildingPopup(false)
    }
    return (
        <div class='container-fluid d-flex flex-wrap justify-content-center align-items-center' style={{ padding: '12vh' }}>
            <BuildingPopup type={'edit'} isVisible={editBuildingPopup} onClose={hideEditBuildingPopup} />
            <BuildingPopup type={'delete'} isVisible={deleteBuildingPopup} onClose={hideDeleteBuildingPopup} />
            <div class='position-relative shadow-lg p-3 mb-5 bg-body-tertiary  rounded p-3 d-flex flex-column justify-content-center'
                style={{ height: '40vh', width: '72vw',  }}>
                <div style={{ fontSize: '25px', cursor: 'pointer' }}
                    class='position-absolute top-0 end-0 m-3'
                >
                    <i onClick={() => setEditBuildingPopup(true)} class="bi bi-pencil-square bi-lg m-3"></i>
                    <i onClick={() => setDeleteBuildingPopup(true)} class="bi bi-trash bi-lg  me-3"></i>
                </div>
                <h1 className='ms-3'>{selectedBuilding.name}</h1>
                <h2 className='ms-3 mb-5'> {selectedBuilding.address}</h2>
                <div className='d-flex flex-row justify-content-around'>
                    <button className="btn btn-warning ms-1" style={{width:'25%'}}>  
                        <h1>{selectedBuilding.noFloor}</h1><h2>  tang  </h2>
                    </button>
                    <button className="btn btn-warning ms-2" style={{width:'25%'}}>
                        <h1>{selectedBuilding.noRoom}</h1>  <h2>phong</h2>


                    </button>
                    <button className="btn btn-warning ms-2" style={{width:'25%'}}>
                        <h1>{selectedBuilding.noFloor}</h1> <h2>phong trong</h2>
                    </button>
                </div>

            </div>

            <div class='position-relative shadow p-3 mb-5 bg-body-tertiary  rounded p-3 d-flex flex-column justify-content-center'
                style={{ height: 'auto', width: '72vw' }}>
                <div style={{ fontSize: '25px' }}>
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
                                    <th scope="row" class="text-center align-middle" style={{ width: '10%' }}>{i}</th>
                                    {
                                        rooms.filter((room, index) =>
                                            room.floor === i
                                        ).map((room, index) => (
                                            <td class='text-center align-middle' key={index}
                                                style={!room.isRented ? { backgroundColor: '#e1e1e1' } : {}}
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