import React from 'react'
import { Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/style.css'
import './App.css'
import Home from './pages/Home'
import ListMapView2 from './pages/listings/ListMapView2'
import ListingDetails from './pages/listings/ListingDetails'
import Error from './pages/Error'

function App() {
    return (
        <Route>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route
                    path="/reservation-restaurant"
                    component={ListMapView2}
                />
                <Route path="/restaurant/:placeId" component={ListingDetails} />
                <Route component={Error} />
            </Switch>
        </Route>
    )
}

export default App
