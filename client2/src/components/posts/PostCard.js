import {useNavigate} from 'react-router-dom'
import { useState } from "react";
import './PostCard.css'


export function PostCard  ({post})  {


  const [showMore, setShowMore] = useState(false);

  const numCaracteres = post.body.substring(0, 400);



  const navigate = useNavigate()

  const handleOnClick = (ev) =>  {

     if(showMore === false){
      setShowMore(true)
     }else{
      setShowMore(false)
     }
    
  }

  

  return (
    <div className='post-card'>  

    <div className='container-img'  onClick={() => navigate(`/posts/${post._id}`)}>
      <img alt='cook' src={post.image}></img>
    </div>
    
    <div className='container-title' onClick={() => navigate(`/posts/${post._id}`)}>
      <h2>{post.title}</h2>
    </div>


    <div className='container-text'>

    { showMore ? (
      <><p>{post.body}</p><button onClick={handleOnClick}>Leer menos --></button></>
    ) : (  
       
       <><p>{numCaracteres} ...</p><button onClick={handleOnClick}>Leer mas --></button></>
    )}
 
    </div>
    
       
       
       
    </div>
    
  );
}

