import React from 'react';
import SideBarMenu from '../common/SideBarMenu';
import * as Styles from './Mision.module.css'

const Mision = () => {
  return (
    <div>
      <SideBarMenu/>
      <h1 className={Styles.title}>Misión</h1>
      <div className={Styles.container}>
        <h2>
          Satisfacer las necesidades gastronómicas de nuestros clientes, 
          ofreciendo alimentos y servicios con la más alta calidad, 
          donde se sobrepasen las expectativas de nuestros clientes y ser un 
          espacio de trabajo que permita la realización personal y el desarrollo
          de sus colaboradores en el grupo.
        </h2>
      </div>
    </div>
  )
}

export default Mision
