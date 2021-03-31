import React, { useState } from "react";
import MediumFeed from "./components/MediumFeed";
import "./styles.css";

const feeds = [
  { name: "postdigitalist", publication: true },
  { name: "zicu22", publication: false },
];
const App = () => {
  const [feed, setFeed] = useState(feeds[0]);
  const onChangeSelect = (event) => {
    const selectedFeed = feeds.find((f) => f.name === event.target.value);
    setFeed(selectedFeed);
  };
  return (
    <div>
      <h1>My Awesome Medium Feed</h1>
      <select
        name="feed-select"
        className="feed-select"
        onChange={onChangeSelect}
      >
        {feeds.map((feed, i) => (
          <option key={i} value={feed.name}>
            {feed.name}
          </option>
        ))}
      </select>
      <MediumFeed username={feed.name} isPublication={feed.publication} />
    </div>
  );
};

export default App;
