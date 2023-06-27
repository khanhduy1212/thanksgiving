import ServiceOne from "./ServiceOne";
import ServiceTwo from "./ServiceTwo";
function OurService() {
  return (
    <>
    <h3 className="head-three-service">
        What You Can Expect from Our Serviced <br/>Apartment in Singapore
    </h3>
    <h4 className="head-four-service"> 
    Facilities<br/>
  and Services
    </h4>
     <a className="view-pot">View Pet Policy</a>
    <ServiceOne/>
    <ServiceTwo/>
    </> 
  )
}

export default OurService