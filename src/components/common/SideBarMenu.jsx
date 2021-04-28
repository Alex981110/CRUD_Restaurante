import React from 'react';
import * as Styles from '../common/SideBarMenu.module.css';
import { Link } from 'react-router-dom';

const SideBarMenu = () => {
  return (
    <>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <Link to="/">
            <label className={Styles.links}>Menu</label>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/restaurante/mision">
            <label className={Styles.links}>Misión</label>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/restaurante/vision">
            <label className={Styles.links}>Visión</label>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/restaurante/promocion">
            <label className={Styles.links}>Promo del día</label>
          </Link>
        </li>
      </ul>
    </>
  )
}

export default SideBarMenu