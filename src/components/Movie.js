import PropTypes from "prop-types"
import {Link} from "react-router-dom"

//Link 와 <a href> 의 차이.
//Link는 경로 이동시 새로고침을 하지 않음.
//a href는 경로 이동시 새로고침 함.

function Movie({id, coverImg, title, summary, genres})
{

    return <div>
    <img src={coverImg} alt={title}/>
    <h2>
      <Link to={`/movie/${id}`}>{title}</Link>
    </h2>
    <p>{summary}</p>
      <ul>
        {genres.map(g => <li key={g}>{g}</li>)}
      </ul>
  </div>;
}

Movie.propTypes=
{
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    //배열형태 지정할때
}


export default Movie;