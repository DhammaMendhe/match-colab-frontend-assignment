import { useState } from "react";
import "flowbite/dist/flowbite.css";

import "./App.css";
import Hero from "./component/Hero";
import AvaterList from "./component/AvaterList";
import CarouselComponent from "./component/CarouselComponent ";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <Hero /> */}
      <CarouselComponent/>
      <AvaterList />
    </>
  );
}

export default App;
