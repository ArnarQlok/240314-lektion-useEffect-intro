import { useState, useEffect } from "react";

let resizeEventCount = 0;

const ResizeComponent = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("EVENT LISTENER ADDED");
    resizeEventCount++;
    console.log(`Fönstret har ändrats i storlek ${resizeEventCount} gånger.`);

    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("EVENT LISTENER REMOVED");
    };
  }, []);

  function handleResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  return (
    <div>
      <p>Window width: {width}px</p>
      <p>Window height: {height}px</p>
    </div>
  );
};

export default ResizeComponent;
