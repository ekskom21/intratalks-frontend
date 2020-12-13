import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';

import ComingEvents from './ComingEvents';
import EventDetails from './EventDetails';
import Companies from './Companies';
import CompanyDetails from './CompanyDetails';
import AllEvents from './AllEvents';
import classNames from 'classnames';

import Navbar from '../molecules/Navbar';

const Router: React.FC = () => {
    const location = useLocation();
    const signedIn = false;

    return (
        <div className={classNames('dark:bg-black', 'dark:text-white', 'min-h-screen')}>
            <Navbar title={location.pathname.slice(1)} />
            <Switch>
                <Route exact path="/" component={signedIn ? ComingEvents : AllEvents} />
                <Route exact path="/companies" component={Companies} />
                <Route exact path="/company/:id" component={CompanyDetails} />
                <Route path="/event/:id" component={EventDetails} />
            </Switch>
        </div>
    );
};

export default Router;
