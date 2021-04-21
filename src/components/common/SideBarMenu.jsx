import React from 'react';
import * as Styles from '../common/SideBarMenu.module.css';

const SideBarMenu = () => {
  return (
    <>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <a className={Styles.links + " nav-link"} aria-current="page" href="/">Menú</a>
        </li>
        <li className="nav-item">
          <a className={Styles.links + " nav-link"} href="EditarPlatillo">Misión</a>
        </li>
        <li className="nav-item">
          <a className={Styles.links + " nav-link"} href="CrearPlatillo">Visión</a>
        </li>
      </ul>
    </>
  )
}

export default SideBarMenu