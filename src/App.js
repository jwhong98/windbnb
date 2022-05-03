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
  return (
    <>
      {isOpen && <MenuModal onToggle={onToggle} />}
      <Header onToggle={onToggle} />
      <Main />
    </>
  );
}

export default App;
