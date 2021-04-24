import React from 'react';
import SideBarMenu from '../common/SideBarMenu';
import * as Styles from './Vision.module.css'

const Vision = () => {
  return (
    <div>
      <SideBarMenu />
      <h1 className={Styles.title}>Visión</h1>

      <div className={Styles.container}>
        <h2>
          Ser reconocidos por brindar a nuestros clientes sensaciones agradables y momentos felices.<br/>
          Posicionarnos en el mercado nacional con la comida más saludable y nutritiva de la zona,
          aumentando con ello la preferencia de nuestros clientes para alcanzar una mayor ventaja competitiva.
        </h2>
      </div>
    </div>
  )
}

export default Vision