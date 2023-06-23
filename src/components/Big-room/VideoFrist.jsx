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
          <div style={{ width: '838px', height: '489px', margin: 'auto', }}>
      <ReactPlayer
        url='/public/video/Thanksgiving serviced Residence.mp4'
        width='100%'
        height='100%'
        border-Radius='50px'
        playing={!playing}
        ref={playerRef}
       
        className='react-player'
      />
      </div>
      <button className="btn-player" onClick={handlePlayPause}>
        <FontAwesomeIcon icon ={faPlay} 
        style={{color:'white',width:'30px',height:'37px',opacity:'1', border:'1px soid #000'}}/>
      </button>
        </>
    ) 
    
}