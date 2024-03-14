import { useState, useEffect } from "react";

const MessageCounter = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");

  useEffect(() => {
    document.title = `(${count}) new messages ${color}`;
  }, [count, color]);

  function handleColor() {
    setColor((prevColor) => (prevColor === "green" ? "red" : "green"));
  }

  return (
    <div>
      <p style={{ color: color }}>
        Du har {count} nya meddelanden och färgen är {color}.
      </p>
      <button onClick={handleColor}>Ändra färg</button>
      <button onClick={() => setCount(count + 1)}>Lägg till meddelande</button>
    </div>
  );
};

export default MessageCounter;
