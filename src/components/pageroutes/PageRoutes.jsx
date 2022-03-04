import React from "react"
import {renderRoutes} from 'react-router-config';
import { Redirect } from 'react-router-dom';
import Paths from "../../Paths";

function PageRoutes (props){
    if (!Paths.exist(props.location.pathname)) {
        return <Redirect to={Paths.home} />;
      }

    return (renderRoutes(props.route.routes));
}

export default PageRoutes;