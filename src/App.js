import { HashRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './routes/Home';
import About from './routes/About';
import Detail from './routes/Detail';
// import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <HashRouter>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="movie/:id" element={<Detail />} />
            </Routes>
        </HashRouter>
        // <div className="App">
        //     <header className="App-header">
        //         <img src={logo} className="App-logo" alt="logo" />
        //         <p>
        //             Edit <code>src/App.js</code> and save to reload.
        //         </p>
        //         <a
        //             className="App-link"
        //             href="https://reactjs.org"
        //             target="_blank"
        //             rel="noopener noreferrer"
        //         >
        //             Learn React
        //         </a>
        //     </header>
        // </div>
    );
}

export default App;
