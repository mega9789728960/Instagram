import React, { useState, useEffect } from 'react';

function Post() {
  const [post, setpost] = useState([]);

  useEffect(() => {
    fetch("/api/posts")
      .then((data) => data.json())
      .then((data) => setpost(data));
  }, []);

  return (
    <div className='d-flex flex-column align-items-center' style={{ padding: "20px" }}>
      {post.length > 0 ? (
        post.map((gf) => {
          return (
            <div key={gf.id} className="mb-4" style={{ width: "500px", border: "1px solid #dbdbdb", borderRadius: "8px", background: "white" }}>
              
              {/* Post Header */}
              <div className="d-flex align-items-center justify-content-between p-2">
                <div className="d-flex align-items-center gap-2">
                  <img
                    src={gf.user.profile_pic}
                    alt=""
                    style={{ width: "40px", height: "40px", borderRadius: "50%", objectFit: "cover" }}
                  />
                  <span style={{ fontWeight: "600", fontSize: "0.95rem" }}>{gf.user.username}</span>
                </div>
                <i className="bi bi-three-dots" style={{ cursor: "pointer" }}></i>
              </div>

              {/* Post Image */}
              <img
                src={gf.image}
                alt=""
                style={{ width: "100%", objectFit: "cover", maxHeight: "500px" }}
              />

              {/* Action Buttons */}
              <div className="d-flex align-items-center justify-content-between px-3 pt-2">
                <div className="d-flex gap-3">
                  <i className="bi bi-heart fs-5 action-icon"></i>
                  <i className="bi bi-chat fs-5 action-icon"></i>
                  <i className="bi bi-send fs-5 action-icon"></i>
                </div>
                <i className="bi bi-bookmark fs-5 action-icon"></i>
              </div>

              {/* Likes */}
              <div className="px-3 pt-2" style={{ fontWeight: "600", fontSize: "0.9rem" }}>
                {gf.likes} likes
              </div>

              {/* Caption */}
              <div className="px-3 pb-3" style={{ fontSize: "0.9rem" }}>
                <b>{gf.user.username}</b> {gf.caption}
              </div>
            </div>
          );
        })
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default Post;
