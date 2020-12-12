import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Frontpage from './Frontpage';

const Router: React.FC = () => {
    return (
        <Switch>
            <Route exact path="/" component={Frontpage} />
        </Switch>
    );
};

export default Router;
