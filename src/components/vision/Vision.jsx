import React from 'react';
import SideBarMenu from '../common/SideBarMenu';
import * as Styles from './Vision.module.css'

const Vision = () => {
  return (
    <div>
      <SideBarMenu/>
      <h1 className={Styles.title}>Esta es la visión</h1>
    </div>
  )
}

export default Vision