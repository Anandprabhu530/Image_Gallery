import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Displayimages from "./components/Displayimages";
import Search from "./components/Search";

const App = () => {
  const [Images, setImages] = useState([]);

  useEffect(() => {
    const fetch_images = async () => {
      const data = await fetch(
        `https://api.unsplash.com/photos/?client_id=ew2YFXjUBjUnYZgD1Gdi9KEJbptMNyWKYxE6RsRjG8Y`
      ).then((response) => response.json());
      await setImages(data);
    };

    fetch_images();
  }, []);

  return (
    <div>
      <Header Images={Images} setImages={setImages} />
      <Search Images={Images} setImages={setImages} />
      <Displayimages Images={Images} setImages={setImages} />
    </div>
  );
};

export default App;
