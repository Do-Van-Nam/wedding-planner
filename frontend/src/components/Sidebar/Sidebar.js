import React from 'react';
import style from './Sidebar.module.css'
// import Link from 'react-router-dom'
import { useState } from 'react';

export default function Sidebar() {
  const icons = [
    { iconName: 'house', des: 'Tong quan' },
    { iconName: 'info-circle', des: 'Quan ly phong o' },
    { iconName: 'envelope', des: 'Cu dan phan anh' },
    { iconName: 'bar-chart-line', des: 'Thong ke' },
    { iconName: 'gear', des: 'Cai dat' },
  ]
  const [selectedIcon, setSelectedIcon] = useState('house')
  return (

    <div className={`${style.sidebar} fixed-top d-flex flex_column align-items-start justify-content-start  navbar shadow p-2  bg-body-tertiary rounded `} >
      <ul class='nav d-flex flex_column align-items-start justify-content-start'>
        {icons.map((icon) => (
          <li className={style.nav_item} key={icon.iconName} 
          onClick={()=>setSelectedIcon(icon.iconName)}>
            <a className={style.nav_link} href='#'>
              <i class={`bi bi-${icon.iconName} ${selectedIcon === icon.iconName ? `${style.selected}` : ''}`}></i>
              <span className={style.nav_text} >{icon.des}</span>
            </a>
          </li>

        ))}

       
        <li className={style.nav_item}>
          <a className={style.nav_link} href='#'>
            <i class="bi bi-box-arrow-left"></i>
            <span className={style.nav_text}>Dang xuat</span>
          </a>
        </li>
      </ul>
    </div>

  );
}




