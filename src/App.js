/* eslint-disable class-methods-use-this */
import React from 'react';
import axios from 'axios';
import Movie from './Movie';
// import logo from './logo.svg';
import './App.css';

class App extends React.Component {
    state = { isLoading: true, movies: [] };

    getMovies = async () => {
        const ytsJson = await axios.get(
            'https://yts-proxy.now.sh/list_movies.json?sort_by=rating'
        );
        const { movies } = ytsJson.data.data;
        this.setState({ isLoading: false, movies });
    };

    componentDidMount() {
        this.getMovies();
    }

    render() {
        const { isLoading, movies } = this.state;
        return (
            <section className="App">
                {isLoading ? (
                    <div className="loader">
                        <span className="loader__text">Loading...</span>
                    </div>
                ) : (
                    <div className="movies-wrap">
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
                    </div>
                )}
            </section>
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
