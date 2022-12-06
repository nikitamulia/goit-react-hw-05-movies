import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {MoviesList} from './MovieSearchList.styled'

const MoviesSearchList = ({ films }) => {
  const location = useLocation();

  return (
    <MoviesList>
      {films &&
        films.map(film => (
          <li key={film.id}>
            <Link to={`/movies/${film.id}`} state={{ from: location }}>
            <img
                    src={
                      film.poster_path
                        ? 'https://image.tmdb.org/t/p/w500' + film.poster_path
                        : 'https://via.placeholder.com/960x240'
                    }
                    alt="About movie"
                    width="250"
                    height="400"
                  />
              <p>{film.title}</p>
            </Link>
          </li>
        ))}
    </MoviesList>
  );
};

MoviesSearchList.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default MoviesSearchList;