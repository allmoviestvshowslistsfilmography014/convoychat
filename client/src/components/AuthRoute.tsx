import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuthContext } from "contexts/AuthContext";

interface AuthRouteProps {
  component: Function;
  [x: string]: any;
}

const AuthRoute: React.FC<AuthRouteProps> = ({
  component: Component,
  ...rest
}) => {
  const { isAuthenticated, isLoading } = useAuthContext();
  
  return (
    <Route
      {...rest}
      render={props =>
        isLoading ? (
          <></>
        ) : isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
};

export default AuthRoute;
