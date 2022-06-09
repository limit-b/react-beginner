/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
import React from 'react';
import axios from 'axios';
import Movie from './Movie';
// import logo from './logo.svg';
// import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        console.log('constructor');
    }

    state = { isLoading: true, movies: [] };

    getMovies = async () => {
        const ytsJson = await axios.get(
            'https://yts-proxy.now.sh/list_movies.json?sort_by=rating'
        );
        const { movies } = ytsJson.data.data;
        this.setState({ isLoading: false, movies });
    };

    componentDidMount() {
        console.log('mount');
        this.getMovies();
    }

    componentDidUpdate() {
        console.log('update');
    }

    componentWillUnmount() {
        console.log('unmount');
    }

    render() {
        const { isLoading, movies } = this.state;
        console.log('render');
        return (
            <div>
                <span>
                    {isLoading ? (
                        'Loading...'
                    ) : (
                        <ul>
                            {movies.map((movie) => (
                                <Movie
                                    key={movie.id}
                                    id={movie.id}
                                    year={movie.year}
                                    title={movie.title}
                                    summary={movie.summary}
                                    poster={movie.medium_cover_image}
                                />
                            ))}
                        </ul>
                    )}
                </span>
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
