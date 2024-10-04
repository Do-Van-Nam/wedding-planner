import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import Sidebar from '../../components/Sidebar/Sidebar'
import Header from '../../components/Header/Header'
import { AppContext } from '../../AppContext'
import api from '../../api'
import BuildingPopup from '../../components/BuildingPopup'
import EditWeddingInfo from '../../components/EditWeddingInfo/EditWeddingInfo'

export default function Manager() {
    // const { selectedBuilding, rooms, setRooms } = useContext(AppContext)
    // const [editBuildingPopup, setEditBuildingPopup] = useState(false)
    // const [deleteBuildingPopup, setDeleteBuildingPopup] = useState(false)
    // useEffect(() => {
    //     api.get(`/room/${selectedBuilding._id}`)
    //         .then((response) =>
    //             setRooms(response.data.rooms)
    //         )
    //         .catch(error => {
    //             console.log(error)
    //         }
    //         )
    // }, [selectedBuilding])
    // const floors = Array.from({ length: selectedBuilding.noFloor }, (__, index) => selectedBuilding.noFloor - index)
    // const hideEditBuildingPopup = () => {
    //     setEditBuildingPopup(false)
    // }
    // const hideDeleteBuildingPopup = () => {
    //     setDeleteBuildingPopup(false)
    // }
    const vendors = [
       { vendor: 'Nhiếp Ảnh Gia', icon: 'bi-camera-fill' },   // Icon: Máy ảnh
  { vendor: 'Tiệc Cưới', icon: 'bi-cake-fill' },        // Icon: Ly rượu
  { vendor: 'Áo Cưới', icon: 'bi-person-fill' },         // Icon: Người
  { vendor: 'Nhà Tổ Chức', icon: 'bi-building-fill' }, // Icon: Nhóm người
  { vendor: 'Bánh Cưới', icon: 'bi-cake-fill' },          // Icon: Túi bánh
  { vendor: 'DJ', icon: 'bi-disc-fill' },        // Icon: Nốt nhạc
  { vendor: 'Quay Phim', icon: 'bi-film' },              // Icon: Cuộn phim
  { vendor: 'Đồ Cưới', icon: 'bi-shop-window' }, // Icon: Cửa hàng
  { vendor: 'Trang Điểm', icon: 'bi-brush-fill' }, // Icon: Bút cọ trang điểm
  { vendor: 'Hoa Cưới', icon: 'bi-flower1' },             // Icon: Hoa
  { vendor: 'Ban Nhạc', icon: 'bi-music-note-list' },     // Icon: Danh sách nhạc
  { vendor: 'Quay Bar', icon: 'bi-cup-straw' },   // Icon: Ly uống
  { vendor: 'Rước Dâu', icon: 'bi-truck' },               // Icon: Xe tải
  { vendor: 'Thiệp Cưới', icon: 'bi-envelope-fill' },     // Icon: Phong bì
    ]
    const [venueExpanded, setVenueExpanded] = useState(true)
    const [editWeddingInfoVisible, setEditWeddingInfoVisible] = useState(false)
    const toggleVenueBoxSize = () => setVenueExpanded(!venueExpanded)
    const closeEditWeddingInfo = () => setEditWeddingInfoVisible(false)
    return (
        <div class=' d-flex flex-wrap justify-content-evenly align-items-start'
            style={{ padding: '0', margin: '0', border: '0', backgroundColor: "#f1ece4" }}>

            <EditWeddingInfo isVisible={editWeddingInfoVisible} onClose={closeEditWeddingInfo} />
            <div className='wedding-info d-flex flex-column justify-content-between align-items-center'
                style={{ cursor: 'pointer', backgroundColor: "#f1ece4", width: '90vw', maxWidth: '90vw', marginTop: '15vh' }}
                onClick={() => setEditWeddingInfoVisible(true)}
            >
                <h3>108 DAYS TO GO!</h3>
                <h1>Khoi & Phuong</h1>
                <div className='d-flex'>
                    <div>January 10,2025</div>
                    <div>Ha Noi</div>
                    <div>Style</div>
                </div>
            </div>


            <h4 style={{ width: '80%' }}>Kế hoạch tổ chức đám cưới</h4>

            <div className='left-side d-flex flex-column '

            >
                <div className='budget shadow p-3 mb-5 bg-body-tertiary rounded'
                    style={{
                        width: '43vw',
                        backgroundColor: 'white',
                        height: venueExpanded ? 'auto' : '15vh',
                        maxHeight: venueExpanded ? '100vh' : '15vh',
                        overflow: 'hidden',
                        transition: 'max-height 1s ease-in-out',
                    }}>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div
                            style={{ fontSize: '24px', fontWeight: '600', paddingBottom: '10px' }}
                        >
                            Ngân sách
                        </div>

                    </div>



                    <div className='d-flex  align-items-center justify-content-around'>
                        <div style={{ fontSize: '24px', color: '#ff44cb', textAlign: 'center' }}>
                            Ngân sách dự kiến<br></br>
                            1234300 d
                        </div>
                        <div style={{ fontSize: '24px', color: '#ff44cb', textAlign: 'center' }}>
                            Đã sử dụng <br />
                            60%
                        </div>
                    </div>
                </div>

                <div className='venue shadow p-3 mb-5 bg-body-tertiary rounded p-3'
                    style={{
                        width: '43vw',
                        backgroundColor: 'white',
                        height: venueExpanded ? 'auto' : '15vh',
                        maxHeight: venueExpanded ? '100vh' : '15vh',
                        overflow: 'hidden',
                        transition: 'max-height 1s ease-in-out',
                    }}>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div onClick={toggleVenueBoxSize}
                            style={{ cursor: 'pointer', fontSize: '24px', fontWeight: '600', paddingBottom: '10px' }}
                        >
                            Địa điểm {venueExpanded ? <i className="bi bi-caret-up"></i> : <i className="bi bi-caret-down"></i>}
                        </div>
                        <button type="button" className="btn btn-lg rounded-pill"
                            style={{ boxSizing: 'border-box', backgroundColor: '#ff44cb', color: 'white', fontWeight: '500', padding: '10px 20px' }}>
                            Tìm địa điểm
                        </button>
                    </div>

                    <div style={{ fontSize: '16px', color: '#555', marginBottom: '10px' }}>
                        Tìm địa điểm thích hợp để tổ chức lễ cưới.
                    </div>

                    <div className='d-flex justify-content-between align-items-center' style={{ marginBottom: '10px' }}>
                        <div style={{ fontSize: '14px', fontWeight: '700', color: '#333' }}>Khám phá các địa điểm</div>
                        <a href="" style={{ fontSize: '14px', color: '#ff44cb' }}>
                            Xem tất cả
                        </a>
                    </div>

                    <div className='location-info d-flex flex-column align-items-center' style={{ marginBottom: '10px' }}>
                        <h4 style={{ fontSize: '18px', fontWeight: '500', color: '#333' }}>Wedding Planner</h4>
                        <h4 style={{ fontSize: '16px', color: '#555' }}>Bạn chưa chọn địa điểm tổ chức đám cưới</h4>
                        <h4 style={{ fontSize: '16px', color: '#555' }}>Thử nội dung khác</h4>
                    </div>

                    <div className='d-flex flex-column align-items-center'>
                        <a href="" style={{ fontSize: '16px', color: '#ff44cb', textAlign: 'center' }}>
                            Đã thuê địa điểm? Thêm thông tin địa điểm tổ chức
                        </a>
                        <a href="" onClick={toggleVenueBoxSize} style={{ fontSize: '16px', color: '#ff44cb', marginTop: '10px' }}>
                            Ẩn bớt
                        </a>
                    </div>
                </div>

            </div>
            <div className='right-side d-flex flex-column '

            >
                <div className='vendors shadow p-3 mb-5 bg-body-tertiary rounded p-3'
                    style={{
                        width: '43vw',
                        backgroundColor: 'white',
                        height: venueExpanded ? 'auto' : '15vh',
                        maxHeight: venueExpanded ? '100vh' : '15vh',
                        overflow: 'hidden',
                        transition: 'max-height 1s ease-in-out',
                    }}>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div onClick={toggleVenueBoxSize}
                            style={{ cursor: 'pointer', fontSize: '24px', fontWeight: '600', paddingBottom: '10px' }}
                        >
                            Nhà cung cấp {venueExpanded ? <i className="bi bi-caret-up"></i> : <i className="bi bi-caret-down"></i>}
                        </div>
                        <button type="button" className="btn btn-lg rounded-pill"
                            style={{ backgroundColor: '#ff44cb', color: 'white', fontWeight: '500', padding: '10px 20px' }}>
                            Tìm Nhà cung cấp
                        </button>
                    </div>

                    <div style={{ fontSize: '16px', color: '#555', marginBottom: '10px' }}>
                        Tìm các nhà cung cấp dịch vụ cho lễ cưới.
                    </div>

                    <div className='d-flex justify-content-between align-items-center' style={{ marginBottom: '10px' }}>
                        <div style={{ fontSize: '14px', fontWeight: '700', color: '#333' }}>Khám phá các Nhà cung cấp</div>
                        <a href="" style={{ fontSize: '14px', color: '#ff44cb' }}>
                            Xem tất cả
                        </a>
                    </div>

                    <div className='location-info d-flex flex-wrap align-items-center' style={{ marginBottom: '10px', width: '100%' }}>
                        


                        {vendors.map((e,i)=>(
                            <div className='d-flex flex-column align-items-center ms-2 me-2'
                            style={{width:'20%'}}
                            >
                            <div className='d-flex justify-content-center align-items-center rounded'
                                style={{ width: '80px', height: '80px', backgroundColor: 'black' }}
                            >
                                <i class={e.icon} style={{ color: 'white', fontSize: '30px' }}></i>
                            </div>
                            <p>{e.vendor}</p>
                        </div>
                        ))}
                    </div>

                    <div className='d-flex flex-column align-items-center'>
                        <a href="" style={{ fontSize: '16px', color: '#ff44cb', textAlign: 'center' }}>
                            Đã thuê nhà cung cấp dịch vụ? Thêm thông tin nhà cung cấp dịch vụ
                        </a>
                        <a href="" onClick={toggleVenueBoxSize} style={{ fontSize: '16px', color: '#ff44cb', marginTop: '10px' }}>
                            Ẩn bớt
                        </a>
                    </div>
                </div>
                <div className='attireAndRings shadow p-3 mb-5 bg-body-tertiary rounded p-3'
                    style={{
                        width: '43vw',
                        backgroundColor: 'white',
                        height: venueExpanded ? 'auto' : '15vh',
                        maxHeight: venueExpanded ? '100vh' : '15vh',
                        overflow: 'hidden',
                        transition: 'max-height 1s ease-in-out',
                    }}>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div onClick={toggleVenueBoxSize}
                            style={{ cursor: 'pointer', fontSize: '24px', fontWeight: '600', paddingBottom: '10px' }}
                        >
                            Trang phục và Nhẫn cưới{venueExpanded ? <i className="bi bi-caret-up"></i> : <i className="bi bi-caret-down"></i>}
                        </div>
                        <button type="button" className="btn btn-lg rounded-pill"
                            style={{ backgroundColor: '#ff44cb', color: 'white', fontWeight: '500', padding: '10px 20px' }}>
                            Tìm Trang phục và Nhẫn
                        </button>
                    </div>

                    <div style={{ fontSize: '16px', color: '#555', marginBottom: '10px' }}>
                        Tìm Trang phục và Nhẫn cho lễ cưới.
                    </div>

                    <div className='d-flex justify-content-between align-items-center' style={{ marginBottom: '10px' }}>
                        <div style={{ fontSize: '14px', fontWeight: '700', color: '#333' }}>Khám phá các Trang phục và Nhẫn</div>
                        <a href="" style={{ fontSize: '14px', color: '#ff44cb' }}>
                            Xem tất cả
                        </a>
                    </div>

                    <div className='location-info d-flex flex-column align-items-center' style={{ marginBottom: '10px' }}>
                        <h4 style={{ fontSize: '18px', fontWeight: '500', color: '#333' }}>Wedding Planner</h4>
                        <h4 style={{ fontSize: '16px', color: '#555' }}>Bạn chưa chọn Trang phục và Nhẫn</h4>
                        <h4 style={{ fontSize: '16px', color: '#555' }}>Thử nội dung khác</h4>
                    </div>

                    <div className='d-flex flex-column align-items-center'>
                        <a href="" style={{ fontSize: '16px', color: '#ff44cb', textAlign: 'center' }}>
                            Đã có Trang phục và Nhẫn cưới? Thêm thông tin
                        </a>
                        <a href="" onClick={toggleVenueBoxSize} style={{ fontSize: '16px', color: '#ff44cb', marginTop: '10px' }}>
                            Ẩn bớt
                        </a>
                    </div>
                </div>

            </div>



        </div>
    )
}




{/* <BuildingPopup type={'edit'} isVisible={editBuildingPopup} onClose={hideEditBuildingPopup} />
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
            </div> */}