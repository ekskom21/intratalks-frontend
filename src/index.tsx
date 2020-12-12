import React from 'react';
import { render } from 'react-dom';

import './index.css';

import Frontpage from './components/organisms/Frontpage';

render(
    <React.StrictMode>
        <Frontpage />
    </React.StrictMode>,
    document.getElementById('root'),
);
