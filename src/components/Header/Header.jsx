
import NavList from "./NavList";
import BookingButtons from "./BookingButtons";


export default function Header() {
  return (
  <>
    <header>
      <div className="big-container">
        <div className="Header">
          <a href="/" className="logo">  
            <img 
              className=" img-logo" 
              src="/public/img/logo (2).png"  
              alt="logo" width={80} height={64}
            />
          </a>
          <NavList />
    
          <BookingButtons />
        </div>
      </div>
    </header>
  </>

  );
}
