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

function Food({ name, picture, rating }) {
    return (
        <div>
            <h1>{name}</h1>
            <img src={picture} alt={name} />
            <h2>{rating}/5.0</h2>
        </div>
    );
}
Food.propTypes = {
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    rating: PropTypes.number,
};

const favoriteFood = [
    {
        id: 0,
        name: 'kimchi',
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.9ohBwKop7U5rJ0x6FAAoigHaFX%26pid%3DApi&f=1',
    },
    {
        id: 1,
        name: 'ramen',
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.Lgc8grh3LgqR2FXSMxo-AgHaEo%26pid%3DApi&f=1',
        rating: 4.9,
    },
    {
        id: 2,
        name: 'rice',
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.D2Uaxk2azGo9ZKBId8PGXQHaE3%26pid%3DApi&f=1',
        rating: 4.6,
    },
    {
        id: 3,
        name: 'chicken',
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.3W5jNjXJZdanoavKgKT9bwHaFG%26pid%3DApi&f=1',
        rating: 5,
    },
];

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
            {favoriteFood.map((dish) => (
                <Food
                    key={dish.id}
                    name={dish.name}
                    picture={dish.image}
                    rating={dish.rating}
                />
            ))}
        </div>
    );
}

export default App;
