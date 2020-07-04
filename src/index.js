import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './global.css'

import Badge from './components/Badge'

const container = document.getElementById('app');


// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(<Badge
        firstName="Walter"
        lastName="Salas"
        avatarUrl="https://secure.gravatar.com/avatar/e163c2bf9f1a86e2567e61cbb47e8a21"
        jobTitle="Frontend Developer"
        twitter="soywaltersalas"
    />,
    container
);
