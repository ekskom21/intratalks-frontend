import React from 'react';

import { Switch, Route } from 'react-router-dom';

import ComingEvents from './ComingEvents';
import EventDetails from './EventDetails';
import Companies from './Companies';
import AllEvents from './AllEvents';

const Router: React.FC = () => {
    const signedIn = false;

    return (
        <div className="dark:bg-black dark:text-white min-h-screen">
            <Switch>
                <Route exact path="/" component={signedIn ? ComingEvents : AllEvents} />
                <Route exact path="/companies" component={Companies} />
                <Route path="/event/:id" component={EventDetails} />
            </Switch>
        </div>
    );
};

export default Router;
