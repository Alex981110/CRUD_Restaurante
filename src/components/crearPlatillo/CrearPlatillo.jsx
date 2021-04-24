import React, { useState } from 'react';
import SideBarMenu from '../common/SideBarMenu';
import * as Styles from './CrearPlatillo.module.css';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { crearPlatillo } from '../../services/index';

const CrearPlatillo = () => {
  
  const [change, setChange] = useState(false);

  const formik = useFormik({
    initialValues:{
      nombre:"",
      descripcion:"",
      precio:"",
      tipo:"",
      cantidad:""
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
        await crearPlatillo(nombre, descripcion, precio, tipo, cantidad );
        setChange(true);
        // console.log("---------> OK",respuesta);
      } catch (error) {
        console.dir(error)
      }
      // console.log("--->",datosFormulario);
    }
  })

  return (
    <div>
      <SideBarMenu/>
      <div className={Styles.title}>
        <h1>Crear platillo</h1>
      </div>

      <div className={Styles.container}>
        <div className="md:d-flex mb-3 md:w-full">
          <label className="form-label">Nombre:</label>
          <input 
            className="form-control"
            name="nombre"
            value={ change === true ? formik.values.nombre = "" : formik.values.nombre}
            onChange={formik.handleChange}
            type="text"
          />
          {
            formik.touched.nombre && formik.errors.nombre && <div className={Styles.error}>{ formik.errors.nombre }</div>
          }
        </div>
        <div className="md:d-flex mb-3">
          <label className="form-label">Description:</label>
          <textarea 
            className="form-control"
            name="descripcion"
            value={ change === true ? formik.values.descripcion = "" : formik.values.descripcion}
            onChange={formik.handleChange}
            rows="3"
          >
          </textarea>
          {
            formik.touched.descripcion && formik.errors.descripcion && <div className={Styles.error}>{ formik.errors.descripcion }</div>
          }
        </div>
        <div className={ Styles.inputs }>
          <div className="m-3">
            <label className="form-label col">Precio:</label>
            <input 
              className="form-control"
              name="precio"
              value={ change === true ? formik.values.precio = "" : formik.values.precio}
              onChange={formik.handleChange}
              type="text"
            />
            {
              formik.touched.precio && formik.errors.precio && <div className={Styles.error}>{ formik.errors.precio }</div>
            }
          </div>
          <div className="m-3">
            <label className="form-label col">Tipo:</label>
            <input 
              className="form-control"
              name="tipo"
              value={ change === true ? formik.values.tipo = "" : formik.values.tipo}
              onChange={formik.handleChange}
              type="text"
            />
            {
              formik.touched.tipo && formik.errors.tipo && <div className={Styles.error}>{ formik.errors.tipo }</div>
            }
          </div>
          <div className="m-3">
            <label className="form-label col">Cantidad:</label>
            <input 
              className="form-control"
              name="cantidad"
              value={ change === true ? formik.values.cantidad = "" : formik.values.cantidad}
              onChange={formik.handleChange}
              type="text"
            />
            {
              formik.touched.cantidad && formik.errors.cantidad && <div className={Styles.error}>{ formik.errors.cantidad }</div>
            }
          </div>
        </div>
        <div>
          <button className={Styles.boton + " btn btn-danger"}
            type="submit"
            onClick={formik.handleSubmit}
          >
            Crear
          </button>
          {
            change === true ? <label className={Styles.guardado}>¡Platillo guardado con éxito!</label> : null
          }
        </div>
      </div>

      <Link to="/">
        <div style={{marginLeft: 40}}>
          <button className="btn btn-danger">Atrás</button>
        </div>
      </Link>
    </div>
  )
}

export default CrearPlatillo