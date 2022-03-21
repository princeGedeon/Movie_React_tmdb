import React from 'react';

const Card = ({movie}) => {
    const dateFormater=(date)=>{
        let [yy,mm,dd]=date.split("-");
        return [dd,mm,yy].join('/');
    }

  
    const genreFinder = () => {
        let genreArray = [];
        for (let i = 0; i < movie.genre_ids.length; i++) {
          switch (movie.genre_ids[i]) {
            case 28:
              genreArray.push("Action");
              break;
            case 12:
              genreArray.push("Aventure");
              break;
            case 16:
              genreArray.push("Animation");
              break;
            case 35:
              genreArray.push("Comédie");
              break;
            case 80:
              genreArray.push("Policier");
              break;
            case 99:
              genreArray.push("Documentaire");
              break;
            case 18:
              genreArray.push("Drame");
              break;
            case 10751:
              genreArray.push("Famille");
              break;
            case 14:
              genreArray.push("Fantasy");
              break;
            case 36:
              genreArray.push("Histoire");
              break;
            case 27:
              genreArray.push("Horreur");
              break;
            case 10402:
              genreArray.push("Musique");
              break;
            case 9648:
              genreArray.push("Mystère");
              break;
            case 10749:
              genreArray.push("Romance");
              break;
            case 878:
              genreArray.push("Science-fiction");
              break;
            case 10770:
              genreArray.push("Téléfilm");
              break;
            case 53:
              genreArray.push("Thriller");
              break;
            case 10752:
              genreArray.push("Guerre");
              break;
            case 37:
              genreArray.push("Western");
              break;
            default:
              break;
          }
        }
        return genreArray.map((genre) => <li key={genre} className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">{genre}</li>);
      };
      const addStorage=()=>{
          alert('yes')
      }
    return (
        <div className="shadow-4xl max-h-md o-verflow-hidden rounded-2xl bg-slate-200">
            <img className="object-cover px-4 py-5 max-h-30px rounded-2xl" src={movie.poster_path?"https://image.tmdb.org/t/p/w500"+movie.poster_path:"./img/blou.png"} alt=""/>
            <div class="px-6 py-4">
    <div class="font-bold text-xl mb-1">{movie.title}</div>
    {movie.release_date?<h5>Sorti le : {dateFormater(movie.release_date)}</h5>:""}
    <h4>{movie.vote_average}/10 <span>⭐️</span></h4>
    
     {movie.overview?<h3 className="font-bold">Synopsys</h3>:""}
     <p class="text-gray-700 text-base my-3 h-24 overflow-y-auto">
     {movie.overview}  
    </p>
  
    <div className='justify-center px-4 py-3 text-center text-white bg-blue-900 cursor-pointer mt- rounded-3xl hover:bg-yellow-500' onClick={()=>addStorage()}>Ajouter aux coups de coeur</div>
  </div>
  <ul class="px-6 pt-4 pb-2">
    {genreFinder()}
  </ul>
  
  
        </div>
    );
};

export default Card;