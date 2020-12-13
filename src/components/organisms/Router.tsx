import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';

import ComingEvents from './ComingEvents';
import EventDetails from './EventDetails';

import Navbar from '../molecules/Navbar';

const Router: React.FC = () => {
    const location = useLocation();

    return (
        <div className="dark:bg-black dark:text-white min-h-screen">
            <Navbar title={location.pathname.slice(1)} />
            <Switch>
                <Route exact path="/" component={ComingEvents} />
                <Route path="/event/:id" component={EventDetails} />
            </Switch>
        </div>
    );
};

export default Router;
