import React from 'react';

const Card = ({ movie }) => {
    return (
        <div className='card'>
            <img src={movie.poster_path ? 
                "https://image.tmdb.org/t/p/w500" + movie.poster_path : "./img/poster.jpg"} alt="Affiche de film" />
            <h2>{movie.title}</h2>
            {movie.release_date ? <h5>Sorti le : {movie.release_date}</h5> : ""}
        </div>
    );
};

export default Card;