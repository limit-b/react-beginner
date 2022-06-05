import React from 'react';
// import PropTypes from 'prop-types';
// import logo from './logo.svg';
// import './App.css';

class App extends React.Component {
    state = { count: 0 };

    add = () => {
        this.setState((current) => ({ count: current.count + 1 }));
    };

    minus = () => {
        if (this.state.count <= 0) {
            this.setState({ count: 0 });
        } else {
            this.setState((current) => ({ count: current.count - 1 }));
        }
    };

    range = () => {
        // eslint-disable-next-line no-console
        console.log(this.state.count);
    };

    render() {
        return (
            <div>
                <h1>The number is : {this.state.count}</h1>
                <button onClick={this.add}>Add</button>
                <button onClick={this.minus}>Minus</button>
                <input
                    value={this.state.count}
                    type="range"
                    onChange={this.range}
                />
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
