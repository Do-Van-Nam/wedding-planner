import React, { useState } from 'react'
import axios from 'axios'
import Sidebar from '../components/Sidebar/Sidebar'
import Header from '../components/Header/Header'
import VendorItem from '../components/VendorItem'
import RequestQuoteForm from '../components/RequestQuoteForm/RequestQuoteForm'
export default function Checklist({ props1 }) {
  const props = {
    subinfo: 'Ha noi, vietnam',
    rating: 4.8,
    noReviews: 128,
    name: 'do khoi',
    description: 'fkdsalfjkdsflksdfsdffjdsalfkdjfldskfjsdklfjdslffkdsalfjkdsflksdfsdffjdsalfkdjfldskfjsdklfjdslf;fkdsalfjkdsflksdfsdffjdsalfkdjfldskfjsdklfjdslfkfkdsalfjkdsflksdfsdffjdsalfkdjfldskfjsdklfjdslfsdjffkdsjalfkdsjflksdfjsal;fksdjf',
    noGuests: '123-2132',
    price: 1234
  }
  const ar = [1, 2, 3, 4, 5, 6, 7]
  const [favouritedVenue,setFavouritedVenue] = useState(false)
  return (
    <div className='d-flex position-relative flex-wrap justify-content-center align-items-center' style={{ padding: '8vw', width: '100vw',maxWidth:'100vw' }}>


      <div className='shadow  p-3 mb-5 bg-body-tertiary rounded '
        style={{
          width: '80%',
          backgroundColor: 'white',
          height: 'auto',
          // maxHeight: '100vh',
          overflow: 'hidden',
          transition: 'max-height 1s ease-in-out',
        }}>
        <div className='d-flex justify-content-between align-items-center'>
          <div
            style={{ cursor: 'pointer', fontSize: '24px', fontWeight: '600', paddingBottom: '10px' }}
          >
            Địa điểm
          </div>
          <button type="button" className="btn btn-lg rounded-pill"
            style={{ boxSizing: 'border-box', backgroundColor: 'green', color: 'white', fontWeight: '500', padding: '10px 20px' }}>
           <i class="bi bi-check-circle-fill me-2"></i>
            Hoàn thành
          </button>
        </div>

        <div style={{ fontSize: '24px', color: '#555', marginBottom: '10px' }}>
          Tên địa điểm
        </div>

        <div className='d-flex justify-content-between align-items-center' style={{ marginBottom: '10px' }}>
          <div style={{ fontSize: '14px', fontWeight: '700', color: '#333' }}>Địa chỉ</div>
          <div className='d-flex flex-column align-items-center'>
            <a  style={{ fontSize: '14px', color: '#ff44cb' }}>
              Xem thêm địa điểm
            </a>
            <a style={{ fontSize: '14px', color: '#ff44cb' ,cursor:'pointer'}}
            onClick={()=>setFavouritedVenue(true)}
            >
              Chọn từ yêu thích
            </a>
          </div>

        </div>
        <div className='d-flex justify-content-center mb-2'>

          <img src="https://i.pinimg.com/736x/93/14/d4/9314d41c73904ce841bb6a117696e8ec.jpg" alt=""
            className='rounded ' style={{ height: '20vh', width: '70%', objectFit: 'cover' }} />
        </div>
       {favouritedVenue&&( 
<>
        <div className='d-flex justify-content-between'>
       
        <h5>Danh sách yêu thích</h5>
        <button type="button" className="btn  rounded-pill"
            style={{ boxSizing: 'border-box', backgroundColor: '#ff44cb', color: 'white', fontWeight: '500', padding: '5px 10px' }}
            onClick={()=>setFavouritedVenue(false)}
            >
            Đóng
          </button>
        </div>
        <div className='d-flex flex-wrap justify-content-center' style={{ padding: '' }}>
          {ar.map((e, i) => (

            <VendorItem key={i} props={props} />
          ))}

        </div>
        </>
       )}

      </div>

    </div>

  )
}