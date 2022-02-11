import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Container } from './App.styled';
import Navigation from './components/Navigation/Navigation';
import HomePage from './views/HomePage/HomePage';
import Movies from './views/Movies/Movies';
import MovieDetails from './views/MovieDetails/MovieDetails';
import NotFoundView from './views/NotFoundView/NotFoundView';

function App() {
  return (
    <Container>
      <Navigation></Navigation>
      <hr />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId/*" element={<MovieDetails />}></Route>
        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </Container>
  );
}

export default App;
