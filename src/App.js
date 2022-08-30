import React, { useState } from "react";
import chillHop from "./utils/data";

const App = () => {
  const [songs, setSongs] = useState(chillHop());
  const [currentSong, setCurrentSong] = useState(songs[0]);

  console.log(currentSong);
  return (
    <main className="main">
      <h1>Music App</h1>
    </main>
  );
};

export default App;
