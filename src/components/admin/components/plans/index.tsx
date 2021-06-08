import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { planStartDelete, planStartLoading, planStartUpdated } from "../../../../actions/plans";
import Details from "../details";

import "./style.css";

function Plans({ items }:any) {
  const [onCollapse, setOnCollapse] = useState(false);
  const [planes, setPlanes] = useState(items);
  const dispatch = useDispatch();
  const [details, setDetails] = useState(JSON.parse(planes?.detalle));
  //console.log(details);
  const openCollapse = () => {
    setOnCollapse(!onCollapse);
  };

  const onChange = (event:any) => {
    setPlanes({ ...planes, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    setDetails(JSON.parse(planes?.detalle));
    setPlanes(items);
  }, [items, planes?.detalle]);

  const handleSubmit = () => {
    dispatch(planStartUpdated(planes));
    openCollapse();
  
  }
  const handleDelete = () =>{
    
      dispatch(planStartDelete(planes.id));
      openCollapse();
      dispatch(planStartLoading());
  
  }

  return (
    <>
      <div className="card alert-dark" onClick={openCollapse}>
        <div className="card-body">
          {onCollapse ? "-" : "+"} {planes?.titulo}
        </div>
      </div>

      {onCollapse && (
        <div>
          <div className="card card-body">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Titulo
              </label>
              <input
                name="titulo"
                type="text"
                onChange={(event) => onChange(event)}
                className="form-control"
                defaultValue={planes?.titulo}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Valor
              </label>
              <input
                name="valor"
                type="number"
                onChange={(event) => onChange(event)}
                className="form-control"
                defaultValue={planes?.valor}
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Descripcion
              </label>
              <textarea
                name="descripcion"
                onChange={(event) => onChange(event)}
                defaultValue={planes?.descripcion}
                className="form-control"
                
              ></textarea>
            </div>

            <div className="mb-3">
              <p>Lista de detalles</p>
              <ul>
                {details.length !== 0
                  ? details.map((list:any, index:any) => {
                      return (
                        <Details
                          details={details}
                          list={list}
                          key={index}
                          id={index}
                          setDetails={setDetails}
                        />
                      );
                    })
                  : JSON.parse(planes?.detalle).map((list:any, index:any) => {
                      return (
                        <Details
                          details={details}
                          list={list}
                          key={index}
                          id={index}
                          setDetails={setDetails}
                        />
                      );
                    })}

                <li>
                  <p>
                    <i className="fas fa-plus-circle"></i> añadir item nuevo
                  </p>
                </li>
              </ul>

              <button className="button-cancelar" onClick={openCollapse}>
                Cancelar
              </button>
              <button onClick={handleSubmit} className="button-guardar">
                {" "}
                guardar
              </button>
              <button
                type="button"
                className="button-borrar"
                onClick={handleDelete}
              >
                {" "}
                Borrar{" "}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Plans;
