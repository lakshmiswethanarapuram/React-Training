import React, {useRef, useEffect, useState} from 'react'
import VIDEO from './video.mp4'
const RefExamples = () => {
    const[play, setPlay] = useState(false);
    let videoRef = useRef();
    console.log(videoRef);
    let playORpause =()=>{
      if(play===true){
        videoRef.current.play();
        setPlay(false);
        console.log(play);
      }else{
        videoRef.current.pause();
        setPlay(true);
        console.log(play);
      }
    }
    useEffect(()=>{
        videoRef.current.style.color="Red";
    }, [])
  return (
    <div>
      {/* <h1 ref ={eleRef} >RefExamples</h1> */}
      <video src={VIDEO} ref={videoRef} onClick={playORpause}></video>
    </div>
  )
}

export default RefExamples