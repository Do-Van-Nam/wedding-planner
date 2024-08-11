import React, {useContext, useState} from 'react';
import api from '../api';
import { AppContext } from '../AppContext';


export default function AddRoomPopup({isVisible,onClose}) {
  const [name,setName] = useState('')
  const [address,setAddress] = useState('')
  const [noFloor,setNoFLoor] = useState(0)
  const [noRoom,setNoRoom] = useState(0)
  const {acc} = useContext(AppContext)
  if(!isVisible) return null 


    const handleAddBuilding=async ()=>{
      try {
        const response = await api.post('/building',{
        name,address,noFloor,noRoom,ownerId:acc._id
      })
      onClose()
      } catch (error) {
        console.log(error)
      }
      
    }

    return (
        
 <div class='position-fixed top-50 start-50 translate-middle
        shadow p-3 mb-5 bg-body-tertiary  rounded p-3 d-flex  flex-column
        justify-content-around align-items-center flex-wrap'
        style={{ height: '45vh', width: '40vw', zIndex: '999' }}>
        <button className="btn btn-warning position-absolute top-0 start-100 translate-middle rounded-circle"
          onClick={onClose}
        >X</button>
        <h2> thong tin toa nha</h2>

        <input type="text" style={{ width: '80%' }} class="form-control mb-3" 
        placeholder="Ten toa nha" aria-label="Username" 
        aria-describedby="basic-addon1"  onChange={e=>setName(e.target.value)}/>
        <input type="text" style={{ width: '80%' }} class="form-control mb-3" placeholder="Dia chi" aria-label="Address" aria-describedby="basic-addon1" onChange={e=>setAddress(e.target.value)}/>

        <div class="input-group mb-3" style={{ width: '80%' }}>
  <input type="number" class="form-control" placeholder="So tang" aria-label="Username" onChange={e=>setNoFLoor(e.target.value)}/>
  <span class="input-group-text me-2" >tang</span>
  <input type="number" class="form-control" placeholder="So phong" aria-label="Server" onChange={e=>setNoRoom(e.target.value)}/>
  <span class="input-group-text" >phong</span>

</div>

        <div class='d-flex justify-content-around'>
          <button className="btn btn-warning " onClick={handleAddBuilding}>Them toa nha</button>
           
        

        </div>
      </div>
    )
} 
    