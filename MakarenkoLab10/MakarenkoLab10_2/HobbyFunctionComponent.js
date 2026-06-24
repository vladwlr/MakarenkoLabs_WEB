function HobbyFunctionComponent() {
    const skills = [
        'HTML та структура сторінки',
        'CSS-оформлення',
        'JavaScript для логіки',
        'React-компоненти'
    ];

    return (
        <section className="card accent">
            <h2>Веб-розробка</h2>
            <p>Функціональний компонент з масивом пунктів.</p>
            <ul>
                {skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                ))}
            </ul>
        </section>
    );
}

export default HobbyFunctionComponent;
