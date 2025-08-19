import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Story() {
  const [shot, setShot] = useState([]);
  const navigation = useNavigate();

  useEffect(() => {
    fetch("/api/shorts")
      .then((res) => res.json())
      .then((data) => setShot(data));
  }, []);

  const totalStories = shot.length;

  return (
    <div className="story">
      {shot.length > 0 ? (
        shot.map((data) => (
          <div className="story-item" key={data.id}>
            <div className="gradient-border">
              <img
                src={data.user.profile_pic}
                className="story-db"
                alt=""
                onClick={() => navigation(`/story/${data.id}/${totalStories}`)}
              />
            </div>
            <p>{data.user.username}</p>
          </div>
        ))
      ) : (
        <div>loading</div>
      )}
    </div>
  );
}

export default Story;
