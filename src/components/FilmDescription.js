import React from 'react';
import { Link, useParams } from 'react-router-dom';

const films = [
    { id: '1', imgUrl: './images/avatar2.jpg', title: 'Avatar 2', description: 'Jake Sully en a marre de la forêt, et décide donc, après avoir causé spoiler: un incident diplomatique à la frontière , de partir voir la Mer.', trailerUrl: 'https://www.youtube.com/embed/VIDEO_ID_1' },
    { id: '2', imgUrl: './images/Escobar.jpg', title: 'Escobar', description: 'Pablo Emilio Escobar Gaviria, né le 1ᵉʳ décembre 1949 à Rionegro, Antioquia, Colombie, et mort le 2 décembre 1993 à Medellín, Colombie, est un trafiquant de cocaïne colombien. À la tête du cartel de Medellín, il a été l un des principaux barons de la drogue dans les années 1980', trailerUrl: 'https://www.youtube.com/embed/VIDEO_ID_2' },
    { id: '3', imgUrl: './images/narcos.jpg', title: 'narcos', description: 'Les narcos trafiquant qui espolier le monde, ploger avec nous dans cette aventure de découvrir le dessous des narcos trafiquant dans notre monde.', trailerUrl: 'https://www.youtube.com/embed/VIDEO_ID_1' },
];

const FilmDescription = () => {
    const { id } = useParams();
    const film = films.find((f) => f.id === id);

// condition pour indiquer si le film n'y est pas 
    if (!film) {
    return (
        <div>
            <p>Film non trouvé</p>
            <Link to="/">Retour</Link>
        </div>);;
    }

    return (
        <div>
            <h1>{film.title}</h1>
            <p>{film.description}</p>
            {/* Intégration de la bande-annonce */}
            <iframe width="560" height="315" src={film.trailerUrl} title="Bande-annonce" frameborder="0" allowfullscreen></iframe>
            <br />
            {/* Lien pour revenir à la page d'accueil */}
            <Link to="/">Retour</Link>
        </div>
    );
};

export default FilmDescription;
