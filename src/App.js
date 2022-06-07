/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
import React from 'react';
// import PropTypes from 'prop-types';
// import logo from './logo.svg';
// import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        console.log('constructor');
    }

    state = { isLoading: true, movies: [], count: 0 };

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
        console.log(this.state.count);
    };

    componentDidMount() {
        console.log('mount');
        setTimeout(
            () =>
                this.setState({
                    isLoading: false,
                    // state에 default 값을 선언하는 것은 필수가 아님
                    book: true,
                }),
            6000
        );
    }

    componentDidUpdate() {
        console.log('update');
    }

    componentWillUnmount() {
        console.log('unmount');
    }

    render() {
        const { isLoading, count } = this.state;
        console.log('render test');
        return (
            <div>
                <div>{isLoading ? 'Loading...' : 'We are ready'}</div>
                <h1>The number is : {count}</h1>
                <button onClick={this.add}>Add</button>
                <button onClick={this.minus}>Minus</button>
                <input value={count} type="range" onChange={this.range} />
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
