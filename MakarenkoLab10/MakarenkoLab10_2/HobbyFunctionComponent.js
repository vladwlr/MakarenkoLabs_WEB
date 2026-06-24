import React from 'react';

function HobbyFunctionComponent() {
    const skills = [
        'HTML та структура сторінки',
        'CSS-оформлення',
        'JavaScript для логіки',
        'React-компоненти'
    ];

    return React.createElement(
        'section',
        { className: 'card accent' },
        React.createElement('h2', null, 'Веб-розробка'),
        React.createElement('p', null, 'Функціональний компонент з масивом пунктів.'),
        React.createElement(
            'ul',
            null,
            skills.map((skill) => React.createElement('li', { key: skill }, skill))
        )
    );
}

export default HobbyFunctionComponent;
