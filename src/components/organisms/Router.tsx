import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ComingEvents from './ComingEvents';

const Router: React.FC = () => {
    return (
        <Switch>
            <Route exact path="/" component={ComingEvents} />
        </Switch>
    );
};

export default Router;
