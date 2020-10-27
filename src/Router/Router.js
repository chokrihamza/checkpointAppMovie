import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from '../App/App';
import Trailer from '../Component/Trailer/Trailer';
import { ListOfMovie } from '../Data/inputs'


function Router(props) {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <App ListOfMovie={ListOfMovie} />
                </Route>
                <Route path='/Trailer/:id' component={Trailer}>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router
