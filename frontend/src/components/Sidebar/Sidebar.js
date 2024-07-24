import React from 'react';
import style from './Sidebar.module.css'
import Link from 'react-router-dom'

export default function Sidebar() {
  return (
    <div className={style.sidebar}>
    <div class='navbar'>
      <ul class='nav flex_column mt-5'>
        <li className={style.nav_item} >
          <a className={style.nav_link} href='#'>
            <i class='bi bi-house_door'></i>
            <span className={style.nav_text} >Thong tin khu nha</span>
          </a>
        </li>
        <li className={style.nav_item}>
          <a className={style.nav_link} href='#'>
            <i class='bi bi-info_circle'></i>
            <span className={style.nav_text}>Quan ly phong o</span>
          </a>
        </li>
        <li className={style.nav_item}>
          <a className={style.nav_link} href='#'>
            <i class='bi bi-envelope'></i>
            <span className={style.nav_text}>Cu dan phan anh</span>
          </a>
        </li>
        <li className={style.nav_item}>
          <a className={style.nav_link} href='#'>
            <i class='bi bi-gear'></i>
            <span className={style.nav_text}>Thong ke</span>
          </a>
        </li>
      </ul>
    </div>
    </div>
   
  );
}




