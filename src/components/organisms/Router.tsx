import React from 'react';

import { Switch, Route } from 'react-router-dom';

import ComingEvents from './ComingEvents';
import EventDetails from './EventDetails';
import Companies from './Companies';
import Frontpage from './Frontpage';

const Router: React.FC = () => {
    return (
        <div className="dark:bg-black dark:text-white min-h-screen">
            <Switch>
                <Route exact path="/" component={Frontpage} />
                <Route exact path="/companies" component={Companies} />
                <Route exact path="/" component={ComingEvents} />
                <Route path="/event/:id" component={EventDetails} />
            </Switch>
        </div>
    );
};

export default Router;
