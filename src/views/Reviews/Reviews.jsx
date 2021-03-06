import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../../services/film-app';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, useReviews] = useState(null);

  useEffect(() => {
    fetchMovieReviews(movieId).then(useReviews);
  }, [movieId]);

  console.log(reviews);

  return (
    <>
      {reviews ? (
        <ul>
          {reviews.results.map(res => {
            return (
              <li key={res.id}>
                <h3>{res.author}</h3>
                <p>{res.content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>No any reviews</p>
      )}
    </>
  );
}
