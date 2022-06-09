import PropTypes from 'prop-types';

// function component의 인자로 props 말고 props의 특정 값만 가져올 때는 꼭 curly bracket(중괄호)으로 감싸야 함
// eslint-disable-next-line no-unused-vars
function Movie({ id, year, title, summary, poster }) {
    return (
        <li>
            <span>{title}</span>
        </li>
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
