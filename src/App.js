import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import MenuModal from "./components/MenuModal/MenuModal";
import Footer from "./components/Footer/Footer";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const onToggle = () => {
    setIsOpen(!isOpen);
  };
  const [location, setLocation] = useState("");
  const [guests, setGuests] = useState(0);
  return (
    <>
      {isOpen && (
        <MenuModal
          onToggle={onToggle}
          location={location}
          setLocation={setLocation}
          guests={guests}
          setGuests={setGuests}
        />
      )}
      <Header onToggle={onToggle} location={location} guests={guests} />
      <Main location={location} guests={guests} />
      <Footer />
    </>
  );
}

export default App;
