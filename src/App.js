import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/style.css'
import './App.css'
import Home from './pages/Home'
import ListingMapView from './pages/listings/ListingMapView'
import ListingDetails from './pages/listings/ListingDetails'
import Error from './pages/Error'

function App() {
    return (
        <Route>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/reservation-restaurant/">
                    <Redirect to="/reservation-restaurant/france" />
                </Route>
                <Route
                    path="/reservation-restaurant/:region"
                    component={ListingMapView}
                />
                <Route path="/restaurant/:placeId" component={ListingDetails} />
                <Route component={Error} />
            </Switch>
        </Route>
    )
}

export default App
