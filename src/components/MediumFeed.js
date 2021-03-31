import React, { useState, useEffect } from "react";

const MediumFeed = ({ username, isPublication = false }) => {
  const [items, setItems] = useState([]);
  useEffect(async () => {
    const rss_url = isPublication
      ? `http://medium.com/feed/${username}`
      : `http://${username}.medium.com/feed`;
    const url = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(
      rss_url
    )}`;
    const feed = await fetch(url).then((res) => res.json());
    setItems(feed.items);
  }, [username]);

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <div>
              <a href={item.link} target="_blank">
                {item.title}
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MediumFeed;
`

`;
