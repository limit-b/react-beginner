import PropTypes from 'prop-types';
import './Movie.css';

// function component의 인자로 props 말고 props의 특정 값만 가져올 때는 꼭 curly bracket(중괄호)으로 감싸야 함
// eslint-disable-next-line no-unused-vars
function Movie({ id, year, title, summary, poster }) {
    return (
        <div className="Movie">
            <img title={title} src={poster} alt={title} />
            <div className="movie-data">
                <h1 style={{ color: 'teal' }} className="movie-data__title">
                    {title}
                </h1>
                <span className="movie-data__year">{year}</span>
                <p className="movie-data__summary">{summary}</p>
            </div>
        </div>
    );
}
Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
};

export default Movie;
