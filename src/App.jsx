import { useState } from "react";

import "./App.css";
import Hero from "./component/Hero";
import AvaterList from "./component/AvaterList";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Hero />
      <AvaterList />
    </>
  );
}

export default App;
