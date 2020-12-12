import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Companies from './Companies';
import Frontpage from './Frontpage';

const Router: React.FC = () => {
    return (
        <Switch>
            <Route exact path="/" component={Frontpage} />
            <Route exact path="/companies" component={Companies} />
        </Switch>
    );
};

export default Router;
