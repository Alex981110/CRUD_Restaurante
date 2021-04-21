import React from 'react';
import SideBarMenu from '../common/SideBarMenu';
import * as Styles from './EditarPlatillo.module.css';

const EditarPlatillo = () => {
  return (
    <div >
      <SideBarMenu />
      <div className={Styles.title}>
        <h1>Editar platillo</h1>
      </div>
      
      <div className={Styles.container}>
        <div className="md:d-flex mb-3 md:w-full">
          <label className="form-label">Nombre:</label>
          <input type="text"
            className="form-control"
          />
        </div>
        <div className="md:d-flex mb-3">
          <label className="form-label">Description:</label>
          <textarea className="form-control"
            rows="3">
          </textarea>
        </div>
        <div className={ Styles.inputs }>
          <div className="m-3">
            <label className="form-label col">Precio:</label>
            <input type="text"
              className="form-control"
            />
          </div>
          <div className="m-3">
            <label className="form-label col">Tipo:</label>
            <input type="text"
              className="form-control"
            />
          </div>
          <div className="m-3">
            <label className="form-label col">Cantidad:</label>
            <input type="text"
              className="form-control"
            />
          </div>
        </div>
      </div>

    </div>
  )
}
// className={Styles.text}

export default EditarPlatillo