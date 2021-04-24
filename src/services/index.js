import axios from 'axios';

const crearPlatillo = ( nombre, descripcion, precio, tipo, cantidad) => {
  const data = {
    nombre: nombre,
    descripcion: descripcion,
    precio: precio,
    tipo: tipo,
    cantidad: cantidad
  }
  return axios.post('http://localhost:4000/restaurante/crearPlatillo', { ...data });
}

const getPlatillos = () => {
  return axios.get('http://localhost:4000/restaurante/listaPlatillos');
}

const deletePlatillo = (idPlatillo) => {
  return axios.delete(`http://localhost:4000/restaurante/borrarPlatillo/${idPlatillo}`);
}

const order = (idPlatillo) => {
  return axios.patch(`http://localhost:4000/restaurante/ordenarPlatillo/${idPlatillo}`)
}

export{
  crearPlatillo,
  getPlatillos,
  deletePlatillo,
  order
}