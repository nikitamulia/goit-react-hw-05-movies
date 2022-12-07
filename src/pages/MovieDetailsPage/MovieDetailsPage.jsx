import { useEffect, useState } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import {getMovieDetails} from 'services/api';
import { Loader } from 'components/Loader/Loader';
import s from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
 

  const backLinkHref = location.state?.from ?? "/";

  useEffect(() => {
    const onDetalisMovie = async () => {
      setLoading(true);
      try {
        const detalyMovie = await getMovieDetails(movieId);
        setMovieInfo(detalyMovie);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    onDetalisMovie();
  }, [movieId]);

  return (
    <>
      <Link to={backLinkHref}>
        <button type="button" >
            Go back
        </button>
      </Link>
      {loading && <Loader />}
      {movieInfo && (
        <div className={s.movieDetalis}>
          <img
            width="300px"
            src={'https://image.tmdb.org/t/p/w500' + movieInfo.poster_path}
            alt={movieInfo.original_title}
          />
          <div>
            <h1>
              {movieInfo.title} ({movieInfo.release_date.slice(0, 4)})
            </h1>
            <p>User score: {movieInfo.popularity}</p>
            <h2>Overview</h2>
            <p>{movieInfo.overview}</p>
            <h2>Genres</h2>
            <ul className={s.genreList}>
              {movieInfo.genres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
      <hr />
      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to={'cast'} state={{ from: location.state?.from }}>Cast</Link>
          </li>
          <li>
            <Link to={'reviews'} state={{ from: location.state?.from }}>Reviews</Link>
          </li>
        </ul>
        <hr />
        <Outlet />
      </div>
    </>
  );
};

export default MovieDetailsPage;