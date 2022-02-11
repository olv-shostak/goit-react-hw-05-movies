import { useParams, Link, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as filmAPI from '../../services/film-app';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';

export default function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    filmAPI.fetchMovie(movieId).then(setMovie);
  }, [movieId]);

  console.log(movie);

  return (
    <>
      {movie && (
        <>
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : 'https://image.freepik.com/free-vector/waves-abstract-background-with-coming-soon-text_1017-5060.jpg'
            }
            alt={movie.title}
            width="400"
          />
          <h1>
            {movie.original_title}{' '}
            {movie.release_date
              ? `(${new Date(Date.parse(movie.release_date)).getFullYear()})`
              : null}
          </h1>
          <p>Release date: {movie.release_date}</p>
          <p>Vote avarage: {movie.vote_average}</p>
          <p>{movie.overview}</p>
          <ul>
            {movie.genres.map(s => {
              return <li key={s.id}>{s.name}</li>;
            })}
          </ul>
          <hr />
          <Link to={`/movies/${movieId}/cast`}>
            Cast
          </Link>
          <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
          <hr />
          <Routes>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
          </Routes>
        </>
      )}
    </>
  );
}
