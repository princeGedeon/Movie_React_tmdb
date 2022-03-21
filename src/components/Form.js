import axios from 'axios';
import { Result } from 'postcss';
import React, {useEffect,useState} from 'react';
import Card from './Card';

const Form = () => {
    const [movieData, setMovieData] = useState([]);
    const [search, setSearch] = useState("spider");
    const [GoodBad, setGoodBad] = useState(null);
       useEffect(() => {
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=672d2b68ae6662bb0d97b3e3fe174867&query=${search}&language=fr-FR`).then((res) => setMovieData(res.data.results));
       }, [search])
    return (
        <React.Fragment className="flex flex-col">
        <div className="px-3 py-4 mx-auto my-3 text-center shadow-sm md:max-w-md h-100 rounded-3xl sm:max-w-sm">
            <form  className="flex flex-col overflow-hidden bg-blue-400 border rounded-2xl ">
                <input type="text"  className="px-5 py-3" id="search" placeholder="Entrez le titre d'un film" onChange={(e)=>setSearch(e.target.value)}/>
                <input type="submit" className="py-2 hover:bg-blue-600 hover:text-white " value="Rechercher"/>

            </form>

            <div className="flex justify-center my-2 overflow-hidden bg-blue-400 overtext-center rounded-2xl">
                <div className='flex justify-center w-1/2 py-2 cursor-pointer hover:bg-blue-800' onClick={()=>setGoodBad("goodToBad")}><div id="goodtoBad"  >Top</div><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7l4-4m0 0l4 4m-4-4v18"></path></svg></div>
                <div className='flex justify-center w-1/2 py-2 cursor-pointer hover:bg-blue-800' onClick={()=>setGoodBad("badToGood")}><div id="badtoGood"  >Bottom</div><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 17l-4 4m0 0l-4-4m4 4V3"></path></svg></div>
            </div>
        </div>
        
     <div className="grid gap-8 p-6 py-16 md:grid-cols-2 xl:grid-cols-3 bg-slate-400">
         
     {movieData
     .slice(0,12)
     .sort((a,b)=>{
         if(GoodBad==="goodToBad")
         {
            return b.vote_average-a.vote_average
         }else if(GoodBad==="badToGood")
         {
            return a.vote_average-b.vote_average
         }
         
         
        })
     .map((movie)=><Card key={movie.id} movie={movie} />)}
     </div>
        </React.Fragment>
        
    );
};

export default Form;