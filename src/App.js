import React, { useState } from "react";
import MediumFeed from "./components/MediumFeed";
import "./styles.css";

const feeds = [
  { name: "postdigitalist", publication: true },
  { name: "zicu22", publication: false },
];
const CustomFeedItem = ({ title, link, thumbnail, description }) => {
  return (
    <div>
      <h3>
        <div>
          <img
            style={{ width: 200, height: 200 }}
            src={thumbnail}
            alt="thumbnail"
          />
        </div>
        <a href={link}>{title}</a>
      </h3>
    </div>
  );
};
const App = () => {
  const [feed, setFeed] = useState(feeds[0]);
  const onChangeSelect = (event) => {
    const selectedFeed = feeds.find((f) => f.name === event.target.value);
    setFeed(selectedFeed);
  };
  return (
    <div>
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
      <div>
        <h1>Other Awesome Medium Feed (nwith custom render)</h1>
        <MediumFeed
          username={feed.name}
          isPublication={feed.publication}
          itemComponent={CustomFeedItem}
        />
      </div>
    </div>
  );
};

export default App;
