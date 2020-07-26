import React from 'react'
import {Route, Redirect} from 'react-router-dom';

const ProtectedRoute = ({
    component: Component,
    status,
    ...rest
  }) => {
    console.log(status);
    return(
    <Route
      {...rest}
      render={props =>
        status===true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
            }}
          />
        )
      }
    />
  )};

export default ProtectedRoute;