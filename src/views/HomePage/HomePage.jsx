import { useState, useEffect } from "react";
import { Link} from 'react-router-dom'
import * as filmAPI from "../../services/film-app";

function HomePage() {
    const[topFilms, setTopFilms] = useState(null);

    useEffect(() => {
        filmAPI.fetchPopularFilms().then(setTopFilms)
    }, [])

    // console.log(topFilms);


    return (
        <ul>
           {topFilms && topFilms.results.map(film => {
               return (
                   <li key={film.id}><Link to={`/movies/${film.id}`}>{film.original_title}</Link></li>
               )
           })}
        </ul>
    )
}

export default HomePage;