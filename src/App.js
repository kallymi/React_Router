import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FilmCard from './components/FilmCard';
import FilmDescription from './components/FilmDescription';

const films = [
  { id: '1', imgUrl: './images/avatar2.jpg', title: 'Avatar 2', description: 'Description détaillée du Film 1.', trailerUrl: 'https://www.youtube.com/embed/VIDEO_ID_1' },
  { id: '2', imgUrl: './images/escobar.jpg', title: 'Pablo Escobar', description: 'Description détaillée du Film 2.', trailerUrl: 'https://www.youtube.com/embed/VIDEO_ID_2' },
  { id: '3', imgUrl: './images/narcos.jpg', title: 'Narcos', description: 'Description détaillée du Film 1.', trailerUrl: 'https://www.youtube.com/embed/VIDEO_ID_1' },
  // ... autres films
];

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home films={films} />} />
      <Route path="/film/:id" element={<FilmDescription />} />
    </Routes>
  </Router>
);

const Home = ({ films }) => (
  <div>
    <h1>Bienvenue sur notre site de films</h1>
    <p>Nous vous proposons de découvrir avec nous les meilleurs films de tout le temps</p>
    {films && films.map((film) => (
      <FilmCard key={film.id} id={film.id} title={film.title} imgUrl={film.imgUrl} />
    ))}
  </div>
);

export default App;
