import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Suggestion() {
  const [sugest, setsugest] = useState([]);
  const [pro, setpro] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/suggestion")
      .then((data) => data.json())
      .then((data) => setsugest(data));

    fetch("http://localhost:3000/profile")
      .then((data) => data.json())
      .then((data) => setpro(data));
  }, []);

  const fhh = async (id, username) => {
    axios.post("http://localhost:3000/followers", { id, username });
  };

  return (
    <div style={{ width: "320px", padding: "10px" }}>
      {/* Profile Section */}
      {pro && (
        <div className='d-flex align-items-center mb-4'>
          <img
            src={pro.profile_pic}
            className='rounded-circle'
            alt=""
            style={{ width: "45px", height: "45px", objectFit: "cover" }}
          />
          <div className="ms-3" style={{ fontWeight: "500" }}>{pro.username}</div>
          <small className='ms-auto text-primary' style={{ cursor: "pointer" }}>Switch</small>
        </div>
      )}

      {/* Header */}
      <div className='d-flex align-items-center mb-3'>
        <p style={{ margin: 0, color: "#8e8e8e", fontWeight: "500", fontSize: "0.9rem" }}>
          Suggested for you
        </p>
        <b className='ms-auto' style={{ cursor: "pointer", fontSize: "0.85rem" }}>See All</b>
      </div>

      {/* Suggestions */}
      <div className="d-flex flex-column gap-3">
        {sugest.length > 0 &&
          sugest.map((data) => (
            <div
              className='d-flex align-items-center suggestion-item'
              key={data.id}
              style={{ padding: "5px 0" }}
            >
              <img
                src={data.profile_pic}
                alt=""
                className='rounded-circle'
                style={{ width: "40px", height: "40px", objectFit: "cover" }}
              />
              <div className="ms-3" style={{ fontSize: "0.9rem", fontWeight: "500" }}>
                {data.username}
              </div>
              <span
                className='text-primary ms-auto'
                style={{ cursor: "pointer", fontSize: "0.85rem", fontWeight: "500" }}
                onClick={() => fhh(data.id, data.username)}
              >
                Follow
              </span>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Suggestion;
