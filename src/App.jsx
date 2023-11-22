import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect } from "react";
import NewsList from "./News/NewsList/NewsList";

function App() {
  return (
    <>
      <NewsList />
    </>
  );
}

export default App;
