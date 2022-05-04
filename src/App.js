import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import MenuModal from "./components/MenuModal/MenuModal";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const onToggle = () => {
    setIsOpen(!isOpen);
  };
  const [location, setLocation] = useState("Helsinki, Finland");

  return (
    <>
      {isOpen && (
        <MenuModal
          onToggle={onToggle}
          location={location}
          setLocation={setLocation}
        />
      )}
      <Header onToggle={onToggle} location={location} />
      <Main />
    </>
  );
}

export default App;
