import React from 'react';

import { Switch, Route, useLocation } from 'react-router-dom';
import classNames from 'classnames';

import ComingEvents from './ComingEvents';
import EventDetails from './EventDetails';
import Companies from './Companies';
import CompanyDetails from './CompanyDetails';
import AllEvents from './AllEvents';
import About from './About';

import Navbar from '../molecules/Navbar';
import { SignedInCtx } from '../../contexts/signedIn';
import { AuthenticationCallback } from './Authentication';
import { Tokens } from '../../generated/graphql';

const Router: React.FC = () => {
    const location = useLocation();

    const authData = localStorage.getItem('auth_data');

    return (
        <SignedInCtx.Provider value={authData !== null ? (JSON.parse(authData) as Tokens) : null}>
            <div className={classNames('dark:bg-black', 'dark:text-white', 'min-h-screen')}>
                <Navbar title={location.pathname.slice(1)} />
                <Switch>
                    <Route exact path="/" component={!!authData ? ComingEvents : AllEvents} />
                    <Route exact path="/companies" component={Companies} />
                    <Route exact path="/company/:id" component={CompanyDetails} />
                    <Route path="/event/:id" component={EventDetails} />
                    <Route path="/auth-callback" component={AuthenticationCallback} />
                    <Route path="/about" component={About} />
                </Switch>
            </div>
        </SignedInCtx.Provider>
    );
};

export default Router;
