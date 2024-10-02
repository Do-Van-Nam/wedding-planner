import React, { useState } from 'react'
import axios from 'axios'
import Sidebar from '../components/Sidebar/Sidebar'
import Header from '../components/Header/Header'
import VendorItem from '../components/VendorItem'
import RequestQuoteForm from '../components/RequestQuoteForm/RequestQuoteForm'
export default function Tenant({ props1 }) {
    const props = {
        subinfo:'Ha noi, vietnam',
        rating:4.8,
        noReviews:128,
        name: 'do khoi',
        description:'fkdsalfjkdsflksdfsdffjdsalfkdjfldskfjsdklfjdslffkdsalfjkdsflksdfsdffjdsalfkdjfldskfjsdklfjdslf;fkdsalfjkdsflksdfsdffjdsalfkdjfldskfjsdklfjdslfkfkdsalfjkdsflksdfsdffjdsalfkdjfldskfjsdklfjdslfsdjffkdsjalfkdsjflksdfjsal;fksdjf',
        noGuests:'123-2132',
        price:1234
    }
    const ar=[1,2,3,4,5,6,7]
    return (
        <div className='d-flex flex-wrap' style={{ padding: '8vw' }}>
        <div className='d-flex justify-content-between' style={{ width: '100%' }}>
          <h3>161 Wedding Venues in Grand Rapids, MI</h3>
          <div className='d-flex' >
            <div className="dropdown" style={{ height: '100%' }}>
              <a
                className="btn btn-secondary dropdown-toggle"
                style={{ height: '100%' }}
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Địa điểm tổ chức
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>
      
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                
                id="floatingInput"
                placeholder="Vị trí"
              />
              <label htmlFor="floatingInput">Vị trí</label>
            </div>
      
            <button
              type="button"
              className="btn btn-lg rounded"
              style={{
                backgroundColor: '#ff44cb',
                color: 'white',
                fontWeight: '500',
                fontSize: '16px',
                padding: '10px 20px',
                width: '20%'
              }}
            >
              <i className="bi bi-search"></i>
            </button>
          </div>
        </div>
              
        <div className='d-flex ' style={{ width: '100%' }}>
        <button type="button" class="btn btn-outline-light rounded-pill border border-black" 
        style={{color:'black'}}
        >Sắp xếp</button>
         <button type="button" class="ms-2 btn btn-outline-light rounded-pill border border-black" 
        style={{color:'black'}}
        >Giá</button>
         <button type="button" class="ms-2 btn btn-outline-light rounded-pill border border-black" 
        style={{color:'black'}}
        >Khoảng cách</button>
      </div>
              {ar.map((e,i)=>   (

                <VendorItem key={i} props={props}/>
              ))}
      
      </div>
      
    )
}