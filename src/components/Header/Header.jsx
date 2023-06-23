import Container from "react-bootstrap/Container";
import NavList from "./NavList";
import BookingButtons from "./BookingButtons";
import VideoFrist from "../VideoFrist";
export default function Header() {
  return (
    <Container>
      <img className=" img-logo" src="/public/img/logo (2).png"></img>
      <NavList />
      <BookingButtons />
      <VideoFrist />
    </Container>
  );
}
