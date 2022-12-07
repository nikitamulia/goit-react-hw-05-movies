import { useState, useEffect } from "react";
import {getSearchMovies} from 'services/api';
import MoviesSearchList from "components/MoviesSearchList/MoviesSearchList";
import { Loader } from "components/Loader/Loader";
import { useSearchParams } from 'react-router-dom';

const MoviesPage = () => {
    const [searchFilms, setSearchFilms] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const queryMovie = searchParams.get('query');

    const handleSubmit = event => {
        event.preventDefault();
        setSearchParams({ query: event.target.elements.query.value.toLowerCase() });
    };

    useEffect(() => {
        if (queryMovie) {
          const onSearchMovie = async () => {
            setLoading(true);
            try {
              const searchMovie = await getSearchMovies(queryMovie);
              setSearchFilms(searchMovie);
            } catch (error) {
              console.log(error);
            } finally {
              setLoading(false);
            }
          };
          onSearchMovie();
        }
    }, [queryMovie]);
    
    return (
    <main>
        <form onSubmit={handleSubmit}>
        <input type="text" name="query" autoFocus />
        <button type="submit">Search</button>
        </form>
        {loading && <Loader />}
        {searchFilms && <MoviesSearchList films={searchFilms}/>}
       
    </main>
    );
    
};


export default MoviesPage;
