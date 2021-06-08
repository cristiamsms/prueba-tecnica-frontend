import React, { useEffect } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { startChecking } from "../actions/auth";
import { AdminScreen } from "../components/admin/AdminScreen";
import { LoginScreen } from "../components/auth/LoginScreen";
import { MainScreen } from "../components/MainScreen";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  const dispatch = useDispatch();
  const { uid } = useSelector((state:RootStateOrAny) => state.auth);
  useEffect(() => {
    dispatch(startChecking());
  }, [dispatch]);

  return (
    <Router>
      <Switch>
        <PublicRoute
          exact
          path="/login"
          component={LoginScreen}
          isAuthenticated={!!uid}
        ></PublicRoute>
        <PublicRoute
          exact
          path="/"
          component={MainScreen}
          isAuthenticated={!!uid}
        ></PublicRoute>
        <PrivateRoute
          exact
          path="/admin"
          component={AdminScreen}
          isAuthenticated={!!uid}
        ></PrivateRoute>
      </Switch>
    </Router>
  );
};
