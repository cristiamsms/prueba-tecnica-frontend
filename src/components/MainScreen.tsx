import React, { useEffect, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { planStartLoading } from "../actions/plans";
import Carts from "./carts";

import "./Main.css";
export const MainScreen = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const plan = useSelector((state:RootStateOrAny) => state.plan);
  useEffect(() => {
    dispatch(planStartLoading());
    setLoading(false);
  }, [dispatch]);

  if (loading) {
    return <h1>Cargando ...</h1>;
  }

  return (
    <>
      <div className="navbar navbar-dark bg-dark mb-4">
        <span className="navbar-brand"></span>
        <Link className="btn btn-outline-primary " to="/login">
          Login
        </Link>
      </div>
      <div className="container-carts">
        {plan.planes.map(
          (item:any) => item && (item.estado) && <Carts price={item.valor} list={JSON.parse(item.detalle)} description={item.descripcion} title={item.titulo} />
        )}
      </div>
    </>
  );
};
