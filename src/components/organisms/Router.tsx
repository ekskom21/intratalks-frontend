import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';

import ComingEvents from './ComingEvents';
import EventDetails from './EventDetails';
import Companies from './Companies';
import AllEvents from './AllEvents';
import classNames from 'classnames';

import Navbar from '../molecules/Navbar';
import { SignedInCtx } from '../../contexts/signedIn';
import { AuthenticationCallback } from './Authentication';

const Router: React.FC = () => {
    const location = useLocation();
    const signedIn = false;

    return (
        <SignedInCtx.Provider value={signedIn}>
            <div className={classNames('dark:bg-black', 'dark:text-white', 'min-h-screen')}>
                <Navbar title={location.pathname.slice(1)} />
                <Switch>
                    <Route exact path="/" component={signedIn ? ComingEvents : AllEvents} />
                    <Route exact path="/companies" component={Companies} />
                    <Route path="/event/:id" component={EventDetails} />
                    <Route path="/auth-callback" component={AuthenticationCallback} />
                </Switch>
            </div>
        </SignedInCtx.Provider>
    );
};

export default Router;
