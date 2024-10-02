import React, { useContext, useState } from 'react';
import api from '../../api';
import { AppContext } from '../../AppContext';
import style from './EditWeddingInfo.module.css'

export default function EditWeddingInfo({ isVisible,onClose}) {
  if (!isVisible) return null

  return (

    <div className='position-fixed top-50 start-50 translate-middle shadow bg-body-tertiary rounded
    d-flex flex-column justify-content-center align-items-center
    '
      style={{ height: '80vh', width: '492px', zIndex: '999' }}>

      <button className='btn rounded-circle position-absolute top-0 end-0 d-flex justify-content-center align-items-center me-1 mt-1'
        style={{ backgroundColor: 'white', zIndex: '999', height: '30px', width: '30px' }}
        onClick={onClose}
        >
        
        <i class="bi bi-x-lg"></i>
      </button>
      <h3>Thông tin đám cưới của bạn</h3>
      <div class="form-floating mb-3" style={{ width: '80%' }}>
        <input type="text" class={`form-control ${style.customInput}`} id="floatingInput" placeholder="" />
        <label for="floatingInput">Tên của bạn</label>
      </div>
      <div class="form-floating mb-3" style={{ width: '80%' }}>
        <input type="text" class={`form-control ${style.customInput}`} id="floatingInput" placeholder="" />
        <label for="floatingInput">Tên người thương của bạn</label>
      </div>
     
      <div class="form-floating mb-3" style={{ width: '80%' }}>
        <input type="date" class={`form-control ${style.customInput}`} id="floatingInput" placeholder="" />
        <label for="floatingInput">Ngày cưới</label>
      </div>
      <div class="form-floating mb-3" style={{ width: '80%' }}>
        <input type="text" class={`form-control ${style.customInput}`} id="floatingInput" placeholder="" />
        <label for="floatingInput">Địa chỉ</label>
      </div>
     
      <button type="button" className="btn btn-lg rounded-pill position-absolute bottom-0 mb-3"
        style={{
          backgroundColor: '#ff44cb',
          color: 'white',
          fontWeight: '500',
          fontSize: '16px',
          padding: '10px 20px',
          width: '90%'
        }}>
       Cập nhật
      </button>
    </div>

  )
}
