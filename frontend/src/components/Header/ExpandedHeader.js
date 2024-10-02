import React, { useContext, useEffect, useState, useRef } from 'react';
import { AppContext } from '../../AppContext';
import axios from 'axios'
import api from '../../api'
import { useNavigate } from 'react-router-dom'
import BuildingPopup from '../BuildingPopup';
import Cookies from 'js-cookie'
import style from './Header.module.css'

export default function ExpandedHeader({ category }) {

    const categoryItems = category.categoryItems

    return (

        <div

            className={` d-flex flex-column `}
            style={{
                backgroundColor: 'white',

                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                paddingLeft: '8vw'
            }}>
            <h3 className='mt-2' style={{ color: '#333', fontWeight: 'bold', cursor: 'pointer' }}>{category.categoryName}<i className="bi bi-arrow-right"></i></h3>
            <div className='d-flex'>
                {
                    categoryItems.map((e, i) => (

                        <div className='category-container d-flex flex-column me-3 border-end border-black p-1 mb-1'>
                            {
                                e.map((e1, i) => (
                                    <div className={style.hoverUnderline} style={{ cursor: 'pointer' }}>{e1}</div>

                                ))
                            }

                        </div>
                    ))
                }

            </div>
        </div>



    );
}
