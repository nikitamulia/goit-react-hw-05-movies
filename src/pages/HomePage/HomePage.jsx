import { useState, useEffect } from "react";
import MoviesSearchList from "components/MoviesSearchList/MoviesSearchList";
import { Loader } from "components/Loader/Loader";
import {getTrending} from 'services/api';

const HomePage = () => {
    const [films, setFilms] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const FetchTrendingFilms = async () => {
          setLoading(true);
          try {
            const trendingFilms = await getTrending();
            setFilms(trendingFilms);
          } catch (error) {
            console.log(error);
          } finally {
            setLoading(false);
          }
        };
        FetchTrendingFilms();
      }, []);
    
    return (
    <main>
        <h1>Trending today</h1>
        {films && <MoviesSearchList films={films} />}
        {loading && <Loader />}
    </main>
    );
}
export default HomePage;