import Header from "./components/Header/Header"
import BigRoom from "./components/Big-room/BigRoom";
import SpaciousContent from "./components/Spacious-Service/SpaciousContent";
import OurService from "./components/Our-service/OurService";
import Gallery from "./components/Photo-Gallery/Gallery";
import Resident from "./components/Resident/Resident";
function App(){
    return(
        <>
            <Header/>
             <BigRoom/>
             <SpaciousContent/>
              <OurService/> 
              <Gallery/>
              <Resident/>

        </>
    )
}
export default App;