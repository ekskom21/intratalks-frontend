import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Frontpage from './Frontpage';

import Navbar from '../molecules/Navbar';

const Router: React.FC = () => {
    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Frontpage} />
            </Switch>
        </>
    );
};

export default Router;
