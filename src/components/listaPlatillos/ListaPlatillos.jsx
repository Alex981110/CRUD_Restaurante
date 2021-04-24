import React, { useEffect, useState } from 'react';
import SideBarMenu from '../common/SideBarMenu';
import * as Styles from './ListaPlatillos.module.css';
import { FiEdit, MdDelete, AiOutlineShoppingCart } from 'react-icons/all';
import { Link } from 'react-router-dom';
import { getPlatillos, deletePlatillo, order} from '../../services/index';

const ListaPlatillos = () => {

  const [platillosData, setPlatillosData] = useState([]);

  const data = async () => {
    try {
      let resp = await getPlatillos();
      let { lista } = resp.data;
      // console.log("---->",resp.data);
      setPlatillosData(lista)
    } catch (error) {
      console.dir(error)
    }
  }

  useEffect(() => {
    data();
  }, []);

  return (
    <div>
      <SideBarMenu />
      <h1 className={Styles.title}>Carta</h1>

      <Link to="/restaurante/crearPlatillo">
        <div style={{ marginLeft: 40 }}>
          <button className="btn btn-danger">Crear platillo</button>
        </div>
      </Link>

      <div className={Styles.container}>
        <table className="table table-striped" style={{ backgroundColor: 'whitesmoke' }}>
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Descripcion</th>
              <th scope="col">Precio</th>
              <th scope="col">Tipo</th>
              <th scope="col">Cantidad</th>
              <th scope="col" style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>Acciones</th>
              {/* TODO:fix it */}
            </tr>
          </thead>
          <tbody>
            {
              platillosData.map(({ _id, nombre, descripcion, precio, tipo, cantidad }) => (
                <tr key={_id}>
                  <td>{nombre}</td>
                  <td>{descripcion}</td>
                  <td>{precio}</td>
                  <td>{tipo}</td>
                  <td>{cantidad}</td>
                  <td>
                    <div className={Styles.containerBtn}>
                      <div>
                        <button
                          className={Styles.buttons + " btn btn-danger"}
                          onClick={
                            async () => {
                              try {
                                await deletePlatillo(_id);
                                // console.log("OK");
                                data()
                              } catch (error) {
                                console.dir(error)
                              }
                            }
                          }
                        >
                          <MdDelete />
                        </button>
                      </div>
                      <Link to="/restaurante/EditarPlatillo">
                        <div><button className={Styles.buttons + " btn btn-danger"}> <FiEdit /></button></div>
                      </Link>
                      <div>
                        <button
                          className={Styles.buttons + " btn btn-danger"}
                          onClick={
                            async () => {
                              try {
                                await order(_id);
                                // console.log("OK");
                                data()
                              } catch (error) {
                                console.dir(error)
                              }
                            }
                          }
                        >
                          <AiOutlineShoppingCart />
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              ))
            }
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>TOTAL: <strong>$350</strong></td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default ListaPlatillos