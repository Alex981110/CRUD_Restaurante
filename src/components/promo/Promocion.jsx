import React from 'react';
import SideBarMenu from '../common/SideBarMenu';
import * as Styles from './Promocion.module.css';

const Promocion = () => {
  return (
    <div>
      <SideBarMenu />
      <h1 className={Styles.title}>Promoción de la semana</h1>
      <div className={Styles.container}>
        <h2>
          ¡Desayunos gratis para los cumpleañeros del mes!
        </h2>
      </div>
    </div>
  )
}

export default Promocion
