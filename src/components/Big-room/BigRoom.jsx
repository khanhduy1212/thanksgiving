import VideoFrist from "./VideoFrist"
import HeadBig from "./HeadBig"
import ButtonBook from "./ButtonBook"
import { Container} from "react-bootstrap"
function BigRoom() {
  return (
    <Container>
      <div className="row">
    <VideoFrist/>
    <HeadBig/>
    <ButtonBook/>
    </div>
    </Container>
  )
}

export default BigRoom