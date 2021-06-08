import React, { useState, useEffect } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { planStartAddNew, planStartLoading } from "../../actions/plans";
import { Navbar } from "../ui/Navbar";
import Plans from "./components/plans";
import "./style.css";
interface Planes {
  titulo: string,
  valor: number,
  descripcion: string,
  detalle: string

}
export const AdminScreen = () => {
  let dispatch = useDispatch();
  const [onCollapse, setOnCollapse] = useState(false);
  const plan = useSelector((state:RootStateOrAny) => state.plan);
  const [loading, setloading] = useState(true);
  const [planes, setplanes] = useState<Planes>();
  
  const [inputs, setInputs] = useState([]);
  console.log(inputs);
  const [valueInput, setValueInput] = useState("");
console.log(plan.planes);
  useEffect(() => {
    dispatch(planStartLoading());
    setloading(false);
  }, [dispatch, plan]);
  const openCollapse = () => {
    setOnCollapse(!onCollapse);
   
    
  };
  const Details = () => {
    setInputs(inputs.filter((clean) => clean !== null));

    setInputs([...inputs, ""]);
  };

  const handleSubmit = () => {
    setInputs(inputs.filter((clean) => clean !== null));

    dispatch(planStartAddNew({ ...planes, detalle: JSON.stringify(inputs) }));
    openCollapse();
    setplanes({titulo:"",valor:0,descripcion:"",detalle:""});
    setInputs([""]);
    
  }
  

  const handleChange = (event) => {
    setValueInput(event.target.value);
  };

  const save = (index) => {
    setInputs(inputs.filter((clean) => clean !== null && clean !== ""));
    setInputs([...inputs, (inputs[index] = valueInput)]);
    setValueInput("");
  };

  const remove = (item) => {
    setInputs(inputs.filter((clean) => clean !== null && clean !== ""));
    setInputs(inputs.filter((remove) => remove !== item));
  };

  const onChange = (event) => {
    setInputs(inputs.filter((clean) => clean !== null && clean !== ""));
    setplanes({ ...planes, [event.target.name]: event.target.value });
  };
  if (loading) {
    return <h1>cargando</h1>;
  }
  return (
    <>
      <Navbar />
      <h1> Planes</h1>
      { plan.planes.map((items, index) => {
        return (items.estado) && <Plans key={index} items={items} />;
      })}
      <p className="add-new" onClick={openCollapse}>
        <i className="fas fa-plus-circle"></i> añadir item nuevo
      </p>
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
                {inputs.map((item, index) => (
                  <li>
                    <input
                      key={index}
                      onChange={(event) => {
                        handleChange(event);
                      }}
                    />
                    <i className="fas fa-share" onClick={() => save(index)}></i>

                    <i
                      className="fas fa-trash-alt"
                      onClick={() => remove(item)}
                    ></i>
                  </li>
                ))}
                <li onClick={() => Details()}>
                  <p>
                    <i className="fas fa-plus-circle"></i> añadir item nuevo
                  </p>
                </li>
              </ul>

              <button className="button-cancelar" onClick={openCollapse}>
                Cancelar
              </button>
              <button  type="button" className="button-guardar" onClick={handleSubmit}> Guardar </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
