import { useRef, useState } from "react"
import ReactPlayer from "react-player"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
export default function VideoFrist(){
    const [playing, setPlaying] = useState(false);
    const playerRef = useRef(null);
    const handlePlayPause=()=>{
        setPlaying(!playing)
    }
    return(
      <>
          <div className="player-warrper" style={{ width: '838px', height: '489px', marginLeft:'7px', }}>
      <ReactPlayer
        url='/public/video/Thanksgiving serviced Residence.mp4'
        width='838px'
        height='489px'
        position='absolute'
        
        playing={playing}
        ref={playerRef}
        
       
        className='react-player'
      />
       <button className="btn-player" onClick={handlePlayPause}>
        <FontAwesomeIcon icon ={faPlay} 
        style={{color:'white',width:'30px',height:'37px',opacity:'1', border:'1px soid #000'}}/>
      </button>
      </div>
     
        </>
    ) 
    
}