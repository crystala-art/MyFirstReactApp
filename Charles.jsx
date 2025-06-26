import React, { useState } from 'react';

function Charles() {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleLike = () => setLikes(likes + 1);
  const handleDislike = () => setDislikes(dislikes + 1);

  return (
    <div className="card">
      <h2>
        Charles Francis Padua, BSIT 3 of CCDI Sorsogon, wins Gold Medal in IT Software Solutions for Business category of the recent Philippine National Skills Competition or World Skills Philippines held last August 21–25, 2024 at the World Trade Center.
      </h2>
      <div className="buttons">
        <button onClick={handleLike}>Like ({likes})</button>
        <button onClick={handleDislike}>Dislike ({dislikes})</button>
      </div>
      <p>Total Ratings: {likes + dislikes}</p>
    </div>
  );
}

export default Charles;