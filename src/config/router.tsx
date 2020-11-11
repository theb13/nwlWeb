import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CreateOrphanage from '../Pages/CreateOrphanage';
import LandingPage from '../Pages/LandingPage';
import Orphanage from '../Pages/Orphanage';
import OrphanagesMap from '../Pages/OrphanagesMap';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={LandingPage} />
                <Route path='/app' component={OrphanagesMap} />
                <Route path='/orphanages/create' component={CreateOrphanage} />
                <Route path='/orphanages/:id' component={Orphanage} />
                
            </Switch>
        </BrowserRouter>
    );
}

export default Routes