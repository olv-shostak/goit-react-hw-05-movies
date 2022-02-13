import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from '../../services/film-app';

export default function Cast() {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieCast(movieId).then(setCast);
  }, [movieId]);

  return (
    <ul>
      {cast &&
        cast.cast.map(c => {
          return (
            <li key={c.id}>
              <img
                src={
                  c.profile_path
                    ? `https://www.themoviedb.org/t/p/w185${c.profile_path}`
                    : 'https://image.freepik.com/free-vector/waves-abstract-background-with-coming-soon-text_1017-5060.jpg'
                }
                alt={c.name}
                width="185"
              />
              <p>{c.name}</p>
              <p>{c.character}</p>
            </li>
          );
        })}
    </ul>
  );
}
