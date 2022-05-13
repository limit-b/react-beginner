// import React from 'react';
import PropTypes from 'prop-types';
// import logo from './logo.svg';
// import './App.css';

// class Food extends React.Component {
//     static propTypes = { favorite: PropTypes.string.isRequired };

//     render() {
//         const { favorite } = this.props;
//         return <h1>{favorite}</h1>;
//     }
// }

function Food({ favorite }) {
    return <h1>{favorite}</h1>;
}
Food.propTypes = { favorite: PropTypes.string.isRequired };

function App() {
    return (
        <div className="App">
            {/* <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header> */}
            <h1>Hello! good</h1>
            <Food favorite="kimchi" />
            <Food favorite="ramen" />
            <Food favorite="rice" />
            <Food favorite="chicken" />
        </div>
    );
}

export default App;
