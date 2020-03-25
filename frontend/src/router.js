import React from 'react'
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon}></Route>
                <Route path="/cadastro" component={Register}></Route>
                <Route path="/perfil" component={Profile}></Route>
                <Route path="/incidents/new" component={NewIncident}></Route>


            </Switch>
        </BrowserRouter>
    )
}