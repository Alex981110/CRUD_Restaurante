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
          <Link to="/EditarPlatillo">
            <label className={Styles.links}>Editar Platillo</label>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/CrearPlatillo">
            <label className={Styles.links}>Crear Platillo</label>
          </Link>
        </li>
      </ul>
    </>
  )
}

export default SideBarMenu