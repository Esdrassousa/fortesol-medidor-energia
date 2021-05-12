import React from  'react'

import {BrowserRouter, Route, Switch} from  'react-router-dom'

import Home from './pages/home'

export default function Routes(){
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/escritoriofortesol" exact component={Home}></Route>
        </Switch>
        </BrowserRouter>
    )
}
