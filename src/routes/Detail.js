
import { useState, useEffect } from "react";
import{useParams} from "react-router-dom"
import YouTube from "react-youtube";

function Detail()
{
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState(null);

    const { id } = useParams();
    console.log(id);

    const getMovie= async()=> 
    {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();

        console.log(json.data);
        setMovie(json.data.movie)
        setLoading(false);
    }

    useEffect(()=>{getMovie();},[]);

    function ShowMovie()
    {
        return <div>
            <img src={movie.large_cover_image} alt={movie.title}/>
            <h3>{movie.title} - {movie.year}</h3>
            <ul>
                {movie.genres.map((concept)=><li>{concept}</li>)}
            </ul>
            <p>
                <div>runtime  {movie.runtime} minutes</div>            
                Trailer
                <YouTube videoId={movie.yt_trailer_code} />
                <a href={movie.url} target="_blank" >Watch now</a>
            </p>
            
        </div>
    }

    return <h1>
        {
            loading? "LOADING..." : 
            <ShowMovie/>
        }
    </h1>
}

export default Detail;