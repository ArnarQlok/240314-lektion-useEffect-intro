import { useState, useEffect } from "react";

const DogPicComponent = () => {
  const [dogPic, setDogPic] = useState(null);
  const [newDog, setNewDog] = useState(0);

  // useEffect(() => {
  //   fetch("https://dog.ceo/api/breeds/image/random")
  //     .then((response) => response.json())
  //     .then((data) => setDogPic(data.message));
  // }, [newDog]);

  useEffect(() => {
    const fetchPics = async () => {
      try {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await response.json();
        setDogPic(data.message);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPics();
  }, [newDog]);

  return (
    <div>
      <img src={dogPic} alt="dog pic" />
      <button onClick={() => setNewDog((prev) => prev + 1)}>get new dog</button>
    </div>
  );
};

export default DogPicComponent;
