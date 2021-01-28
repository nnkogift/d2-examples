import React from 'react'
import {Router, Route } from "react-router-dom";
import {IndicatorTable} from "./example-pages/indicator-table";
import MainApp from "./example-pages";
import history from "./history";


const MyApp = () => {
    return (
        <>
            <Router history={history}>
                <Route component={IndicatorTable} path='/indicators' exact/>
                <Route component={MainApp} path='/' exact/>
            </Router>
        </>
    )
}

export default MyApp
