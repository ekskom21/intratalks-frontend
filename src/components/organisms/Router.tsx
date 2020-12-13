import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';

import Frontpage from './Frontpage';

import Navbar from '../molecules/Navbar';

const Router: React.FC = () => {
    const location = useLocation();

    return (
        <>
            <Navbar title={location.pathname.slice(1)} />
            <Switch>
                <Route exact path="/" component={Frontpage} />
            </Switch>
        </>
    );
};

export default Router;
