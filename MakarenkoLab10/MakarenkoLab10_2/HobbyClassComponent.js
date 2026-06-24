import React, { Component } from 'react';

class HobbyClassComponent extends Component {
    render() {
        return React.createElement(
            'section',
            { className: 'card' },
            React.createElement('h2', null, 'Тренування'),
            React.createElement('p', null, 'Це один з варіантів класового компонента. Тут я вивів короткий опис свого інтересу через метод render().')
        );
    }
}

export default HobbyClassComponent;
