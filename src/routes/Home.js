import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home()
{

    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    
    
    //마치 코루틴 같은듯?
    const getMovies = async()=>
    {
      //안쪽의 await가 링크의 정보 fetch 해옴. 밖의 await가 그 정보를 json화 시킴
      const json = await(
        await fetch
        (`https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`)
      ).json();
      setMovies(json.data.movies);
      setLoading(false);
    }
    
    useEffect(()=>{getMovies();},[]);
  
    console.log(movies);
  
    return (
      <div>
        {loading ? <h1>Loading..</h1> : 
        <div>{
          movies.map((item)=><Movie 
              key={item.id}
              id={item.id}
              coverImg={item.medium_cover_image}
              title={item.title}
              genres={item.genres}
              summary={item.summary}
            />)
          }</div>
        }</div>
    );

}

export default Home;