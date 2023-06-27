import { faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
function Resident() {
  return (
    <div className="resident-container">
     <div className="btn-resident">
        <button className="btn-orchard">
        Orchard & River Valley
        </button>
        <button className="btn-downtown">
        Downtown & CBD
        </button>
        <h3 className="Head-three-resident">Thanksgiving Serviced Residence at Oxley</h3>
        <div className="title-local-resident">
            <FontAwesomeIcon icon={faLocationDot}
             style={{width:'24px',
             height:'24px',
              color:'#57DBC5',textAlign:'center'}}
            />
            <p className="title-head">328 River Valley Road, Singapore 238360</p>
        </div>
    </div>
    </div>

  )
}

export default Resident
