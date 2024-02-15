import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'
const FilmCard = ({ id, title, imgUrl }) => (
    <div className="film-card">
        <p>{title}</p>
        <img src={imgUrl} alt={title} />
        <Link to={`/film/${id}`}>{title}</Link>
    </div>
);

export default FilmCard;
