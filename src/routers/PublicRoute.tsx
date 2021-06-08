import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import PropTypes from 'prop-types';
export const PublicRoute = ({
    isAuthenticated,
    component:Component,
    ...rest
}:any) => {
    return (
        <Route {...rest}
        component={(props:any) =>(
            (  !isAuthenticated) 
                ? (<Component {...props}/>)
                : (<Redirect to="/admin"/>)
        )

        }>
            
        </Route>
    )
}
PublicRoute.propTyps = {
    isAuthenticated:PropTypes.bool.isRequired,
    component:PropTypes.func.isRequired
}