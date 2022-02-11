import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "../../services/film-app"

export default function Cast() {
    const [cast, setCast] = useState(null);
    const { movieId } = useParams();

    useEffect(() => {
        fetchMovieCast(movieId).then(setCast);
      }, [movieId]);

      console.log(cast);
    
    return (
        <p>Cast</p>
    )
}