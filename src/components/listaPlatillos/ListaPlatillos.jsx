import React, { useEffect, useState } from 'react';
import SideBarMenu from '../common/SideBarMenu';
import * as Styles from './ListaPlatillos.module.css';
import { FiEdit, MdDelete, AiOutlineShoppingCart} from 'react-icons/all';
import { Link } from 'react-router-dom';
import { getPlatillos, deletePlatillo, order } from '../../services/index';

const ListaPlatillos = () => {

  const [platillosData, setPlatillosData] = useState([]);
  const [total, setTotal] = useState(0);

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
        <div style={{ paddingLeft: 40, maxWidth: 180 }}>
          <button className="btn btn-danger">Crear platillo</button>
        </div>
      </Link>

      <div className={Styles.container}>
        <table className="table table-striped" style={{ backgroundColor: 'whitesmoke' }}>
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col"><div className={Styles.centerContent}>Descripcion</div></th>
              <th scope="col"><div className={Styles.centerContent}>Precio</div></th>
              <th scope="col"><div className={Styles.centerContent}>Tipo</div></th>
              <th scope="col"><div className={Styles.centerContent}>Cantidad</div></th>
              <th scope="col"><div className={Styles.centerContent}>Acciones</div></th>
            </tr>
          </thead>
          <tbody>
            {
              platillosData.map(({ _id, nombre, descripcion, precio, tipo, cantidad }) => (
                <tr key={_id}>
                  <td><div>{nombre}</div></td>
                  <td><div className={Styles.centerContent} style={{ maxWidth: 400 }}>{descripcion}</div></td>
                  <td><div className={Styles.centerContent}>${precio}</div></td>
                  <td><div className={Styles.centerContent}>{tipo}</div></td>
                  <td><div className={Styles.centerContent}>{cantidad}</div></td>
                  <td>
                    <div className={Styles.centerContent}>
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
                      <Link to={`/restaurante/EditarPlatillo/${_id}`}>
                        <div>
                          <button 
                            className={Styles.buttons + " btn btn-danger"}
                          >
                            <FiEdit />
                          </button>
                        </div>
                      </Link>
                      <div>
                        <button
                          className={Styles.buttons + " btn btn-danger"}
                          disabled={ cantidad === 0 ? true : false}
                          onClick={
                            async () => {
                              try {
                                await order(_id);
                                data()
                                setTotal(total + precio)
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
              <td><div className={Styles.centerContent}>TOTAL</div></td>
              <td><div><strong> ${total}</strong></div></td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default ListaPlatillos