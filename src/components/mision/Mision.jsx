import React from 'react';
import SideBarMenu from '../common/SideBarMenu';
import * as Styles from './Mision.module.css'

const Mision = () => {
  return (
    <div>
      <SideBarMenu/>
      <h1 className={Styles.title}>Esta es la misión</h1>
    </div>
  )
}

export default Mision
