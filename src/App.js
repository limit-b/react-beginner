import React from 'react';
// import PropTypes from 'prop-types';
// import logo from './logo.svg';
// import './App.css';

class App extends React.Component {
    state = { count: 0 };

    // eslint-disable-next-line class-methods-use-this
    add = () => {
        console.log('add');
    };

    // eslint-disable-next-line class-methods-use-this
    minus = () => {
        console.log('minus');
    };

    render() {
        return (
            <div>
                <h1>The number is : {this.state.count}</h1>
                <button onClick={this.add}>Add</button>
                <button onClick={this.minus}>Minus</button>
            </div>
        );
    }
}

// function App() {
//     return (
//         <div className="App">
//             <header className="App-header">
//                 <img src={logo} className="App-logo" alt="logo" />
//                 <p>
//                     Edit <code>src/App.js</code> and save to reload.
//                 </p>
//                 <a
//                     className="App-link"
//                     href="https://reactjs.org"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                 >
//                     Learn React
//                 </a>
//             </header>
//         </div>
//     );
// }

export default App;
