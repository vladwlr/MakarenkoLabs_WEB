import React from 'react';
import './App.css';
import HobbyClassComponent from './HobbyClassComponent';
import HobbyFunctionComponent from './HobbyFunctionComponent';

function App() {
    return React.createElement(
        'main',
        { className: 'App' },
        React.createElement('div', { className: 'label' }, 'React · лабораторна 10'),
        React.createElement('h1', null, 'Мої інтереси'),
        React.createElement('p', { className: 'student' }, 'Макаренко Владислав, 303-ТН'),
        React.createElement(HobbyClassComponent),
        React.createElement(HobbyFunctionComponent)
    );
}

export default App;
