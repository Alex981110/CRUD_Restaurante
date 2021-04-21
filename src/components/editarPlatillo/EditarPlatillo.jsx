import React from 'react';
import SideBarMenu from '../common/SideBarMenu';
import * as Styles from '../editarPlatillo/EditarPlatillo.module.css';

const EditarPlatillo = () => {
  return (
    <div >
      <SideBarMenu/>
      <div className={Styles.title}>
         <h1>Editar platillo</h1>
         
      </div>
    </div>
  )
}
// className={Styles.text}

export default EditarPlatillo