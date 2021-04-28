import React, { useEffect, useState } from 'react';
import SideBarMenu from '../common/SideBarMenu';
import * as Styles from './EditarPlatillo.module.css';
import { Link, useParams } from 'react-router-dom';
import { editarPlatillo, getPlatilloById } from '../../services/index';
import * as Yup from 'yup';
import { useFormik } from 'formik';

const EditarPlatillo = () => {

  let { idPlatillo } = useParams();

  const [change, setChange] = useState(false);

  const platilloById = async () => {
    try {
      let resp = await getPlatilloById(idPlatillo);
      let { platillo } = resp.data;
      // console.log("--->", platillo);
      formik.setValues(platillo);
    } catch (error) {
      console.dir(error);
    }
  }

  useEffect(() => {
    platilloById();
  }, []);

  const formik = useFormik({
    initialValues:{
      nombre: "",
      descripcion: "",
      precio: "",
      tipo: "",
      cantidad: ""
    },
    validationSchema: Yup.object({
      nombre: Yup.string().required("Campo obligatorio"),
      descripcion: Yup.string().required("Campo obligatorio"),
      precio: Yup.string().required("Campo obligatorio").matches(/^(([0-9]*\d))$/, "Sólo números"),
      tipo: Yup.string().required("Campo obligatorio"),
      cantidad: Yup.string().required("Campo obligatorio").matches(/^(([0-9]*\d))$/, "Sólo números")
    }),
    onSubmit: async(datosFormulario) => {

      let { nombre, descripcion, precio, tipo, cantidad } = datosFormulario

      try {
        await editarPlatillo(nombre, descripcion, precio, tipo, cantidad, idPlatillo );
        setChange(true);
        // console.log("---------> OK",respuesta);
      } catch (error) {
        console.dir(error)
      }
    }
  });

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
            name="nombre"
            className="form-control"
            value={formik.values.nombre}
            onChange={formik.handleChange}
          />
        </div>
        <div className="md:d-flex mb-3">
          <label className="form-label">Description:</label>
          <textarea className="form-control"
            name="descripcion"
            rows="3"
            value={formik.values.descripcion}
            onChange={formik.handleChange}
          >
          </textarea>
        </div>
        <div className={Styles.inputs}>
          <div className="m-3">
            <label className="form-label col">Precio:</label>
            <input type="text"
              name="precio"
              className="form-control"
              value={formik.values.precio}
              onChange={formik.handleChange}
            />
          </div>
          <div className="m-3">
            <label className="form-label col">Tipo:</label>
            <input type="text"
              name="tipo"
              className="form-control"
              value={formik.values.tipo}
              onChange={formik.handleChange}
            />
          </div>
          <div className="m-3">
            <label className="form-label col">Cantidad:</label>
            <input type="text"
              name="cantidad"
              className="form-control"
              value={formik.values.cantidad}
              onChange={formik.handleChange}
            />
          </div>
        </div>
        <div>
          <button className={Styles.boton + " btn btn-danger"}
            type="submit"
            onClick={formik.handleSubmit}
          >
            Editar
          </button>
          {
            change === true ? <label className={Styles.guardado}>¡Platillo editado con éxito!</label> : null
          }
        </div>
      </div>

      <Link to="/">
        <div style={{ marginLeft: 40 }}>
          <button className="btn btn-danger">Atrás</button>
        </div>
      </Link>

    </div>
  )
}

export default EditarPlatillo