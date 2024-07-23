import React from 'react';
import style from './Sidebar.module.css'

export default function Sidebar() {
  return (
    <div className={style.sidebar}>
    <div class='navbar'>
      <ul class='nav flex_column'>
        <li className={style.nav_item}>
          <a className={style.nav_link} href='#'>
            <i class='bi bi-house_door'></i>
            <span className={style.nav_text}>Home</span>
          </a>
        </li>
        <li className={style.nav_item}>
          <a className={style.nav_link} href='#'>
            <i class='bi bi-info_circle'></i>
            <span className={style.nav_text}>About</span>
          </a>
        </li>
        <li className={style.nav_item}>
          <a className={style.nav_link} href='#'>
            <i class='bi bi-envelope'></i>
            <span className={style.nav_text}>Contact</span>
          </a>
        </li>
        <li className={style.nav_item}>
          <a className={style.nav_link} href='#'>
            <i class='bi bi-gear'></i>
            <span className={style.nav_text}>Settings</span>
          </a>
        </li>
      </ul>
    </div>
    </div>
   
  );
}




