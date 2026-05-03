import { useEffect, useState } from 'react';
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom';

const Player = () => {
 
const navigate = useNavigate();   
const {id} = useParams();

  const [apiData, setData]= useState({
    name:"",
    key:"",
    published_at:"",
    typeof:""
  })

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMmQ5Yjc5ODM2NzI0OWIwNTJiMzgwZjgzNzlmNzlmMiIsIm5iZiI6MTczODM5MjU5NS4yMDUsInN1YiI6IjY3OWRjNDEzOWUyYmM0YjBiYzk1MzUyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IhdIrctSqHbi7QpGSQHSRbjMZF_FTeRB5W-gsPLwv84'
      }
    };

    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(res => res.json())
      .then(res => setData(res.results[0]))
      .catch(err => console.error(err));
  }, [id]);

  

  return (
    <div className='player'>
      <img src={back_arrow_icon} onClick={()=>{navigate(-2)}} />
      <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}`} title={apiData.name} frameBorder='0' allowFullScreen></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player;
