import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Movie.css';

function Movie({ id, title, year, genres, summary, poster }) {
    return (
        <Link
            to={`movie/${id}`}
            state={{ title, year, genres, summary, poster }}
        >
            <div className="Movie">
                <img title={title} src={poster} alt={title} />
                <div className="movie-data">
                    <h1 style={{ color: 'teal' }} className="movie-data__title">
                        {title}
                    </h1>
                    <span className="movie-data__year">{year}</span>
                    <ul className="movie-data__genres">
                        {genres.map((genre, index) => (
                            <li key={index}>{genre}</li>
                        ))}
                    </ul>
                    <p className="movie-data__summary">
                        {summary.slice(0, 180)}...
                    </p>
                </div>
            </div>
        </Link>
    );
}
Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
};

export default Movie;
