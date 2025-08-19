import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

function Viewstory() {
  const [post1, setPost1] = useState(null);
  const navigate = useNavigate();
  const { id, tot } = useParams();

  // Redirect if out of range
  if (id > tot || id <= 0) {
    navigate("/");
  }

  useEffect(() => {
    fetch(`http://localhost:3000/shorts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost1(data));
  }, [id]);

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ height: "100vh", position: "relative", backgroundColor: "#000" }}
    >
      {post1 ? (
        <>
          {/* Left Arrow */}
          <Link
            to={`/story/${Number(id) - 1}/${tot}`}
            style={{
              position: "absolute",
              left: "20px",
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 10,
              color: "#fff",
              fontSize: "3rem",
              textShadow: "0 0 10px rgba(0,0,0,0.8)",
            }}
          >
            <i
              className="bi bi-chevron-left"
              style={{
                cursor: "pointer",
                transition: "transform 0.2s ease, color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.2)";
                e.currentTarget.style.color = "#ffcc00";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.color = "#fff";
              }}
            ></i>
          </Link>

          {/* Story Image */}
          <img
            src={post1.image}
            alt=""
            style={{
              maxHeight: "90vh",
              maxWidth: "90vw",
              objectFit: "contain",
              display: "block",
            }}
          />

          {/* Right Arrow */}
          <Link
            to={`/story/${Number(id) + 1}/${tot}`}
            style={{
              position: "absolute",
              right: "20px",
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 10,
              color: "#fff",
              fontSize: "3rem",
              textShadow: "0 0 10px rgba(0,0,0,0.8)",
            }}
          >
            <i
              className="bi bi-chevron-right"
              style={{
                cursor: "pointer",
                transition: "transform 0.2s ease, color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.2)";
                e.currentTarget.style.color = "#ffcc00";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.color = "#fff";
              }}
            ></i>
          </Link>

          {/* Action bar like Instagram */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              padding: "10px 20px",
              position: "absolute",
              bottom: "0",
              background: "linear-gradient(transparent, rgba(0,0,0,0.6))",
              color: "#fff",
            }}
          >
            <div style={{ display: "flex", gap: "15px", fontSize: "1.5rem" }}>
              <i className="bi bi-heart"></i>
              <i className="bi bi-chat"></i>
              <i className="bi bi-send"></i>
            </div>
            <i className="bi bi-three-dots" style={{ fontSize: "1.5rem" }}></i>
          </div>
        </>
      ) : (
        <div style={{ color: "#fff" }}>loading</div>
      )}
    </div>
  );
}

export default Viewstory;
