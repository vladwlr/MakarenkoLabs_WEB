import './App.css';
import HobbyClassComponent from './HobbyClassComponent';
import HobbyFunctionComponent from './HobbyFunctionComponent';

function App() {
    return (
        <main className="App">
            <div className="label">React · лабораторна 10</div>
            <h1>Мої інтереси</h1>
            <p className="student">Макаренко Владислав, 303-ТН</p>

            <HobbyClassComponent />
            <HobbyFunctionComponent />
        </main>
    );
}

export default App;
