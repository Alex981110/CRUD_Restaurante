import React from 'react';
import SideBarMenu from '../common/SideBarMenu';
import * as Styles from './ListaPlatillos.module.css';
import { FiEdit, MdDelete, AiOutlineShoppingCart } from 'react-icons/all';

const ListaPlatillos = () => {
  return (
    <div>
      <SideBarMenu />
      <h1 className={Styles.title}>Lista platillos</h1>

      <div className={Styles.container}>
        <table className="table table-striped" style={{backgroundColor:'whitesmoke'}}>
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Descripcion</th>
              <th scope="col">Precio</th>
              <th scope="col">Tipo</th>
              <th scope="col">Cantidad</th>
              <th scope="col" style={{ display:'flex', alignItems:'flex-start', justifyContent:'center'}}>Acciones</th>
              {/* TODO:fix it */}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>asd</td>
              <div className={Styles.containerBtn}>
                <div><button className={Styles.buttons + " btn btn-danger"}> <MdDelete/></button></div>
                <div><button className={Styles.buttons + " btn btn-danger"}> <FiEdit/></button></div>
                <div><button className={Styles.buttons + " btn btn-danger"}> <AiOutlineShoppingCart/></button></div>
              </div>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>@fat</td>
              <div className={Styles.containerBtn}>
                <div><button className={Styles.buttons + " btn btn-danger"}> <MdDelete/></button></div>
                <div><button className={Styles.buttons + " btn btn-danger"}> <FiEdit/></button></div>
                <div><button className={Styles.buttons + " btn btn-danger"}> <AiOutlineShoppingCart/></button></div>
              </div>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
              <td>@twitter</td>
              <div className={Styles.containerBtn}>
                <div><button className={Styles.buttons + " btn btn-danger"}> <MdDelete/></button></div>
                <div><button className={Styles.buttons + " btn btn-danger"}> <FiEdit/></button></div>
                <div><button className={Styles.buttons + " btn btn-danger"}> <AiOutlineShoppingCart/></button></div>
              </div>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
              <td>@twitter</td>
              <div className={Styles.containerBtn}>
                <div><button className={Styles.buttons + " btn btn-danger"}> <MdDelete/></button></div>
                <div><button className={Styles.buttons + " btn btn-danger"}> <FiEdit/></button></div>
                <div><button className={Styles.buttons + " btn btn-danger"}> <AiOutlineShoppingCart/></button></div>
              </div>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default ListaPlatillos