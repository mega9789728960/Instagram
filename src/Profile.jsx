import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Profile() {
  const [profile, setprofile] = useState(null);
  const [followers, setfollowers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/profile").then((data) => setprofile(data.data));
    axios.get("http://localhost:3000/followers").then((data) => setfollowers(data.data));
  }, []);

  const jk = async (id) => {
    axios.delete(`http://localhost:3000/followers/${id}`);
  };

  function onchangehandler(e) {
    setprofile((pre) => ({
      ...pre,
      [e.target.name]: e.target.value
    }));
  }

  const handen1 = async () => {
    axios.put("http://localhost:3000/profile", profile)
      .then(() => console.log("updated"));
  };

  return (
    <div className='container mt-4' style={{ maxWidth: "600px" }}>
      {profile ? (
        <div className='text-center mb-5'>
          {/* Profile Picture */}
          <img
            src={profile.profile_pic}
            className='rounded-circle mb-3'
            alt=""
            style={{ width: "100px", height: "100px", objectFit: "cover" }}
          />

          {/* Username */}
          <h5 className='mb-3'>{profile.username}</h5>

          {/* Edit Inputs */}
          <div className='mb-3'>
            <input
              type="text"
              value={profile.username}
              name='username'
              className='form-control'
              onChange={onchangehandler}
            />
          </div>
          <div className='mb-3'>
            <input
              type="text"
              value={profile.profile_pic}
              name='profile_pic'
              className='form-control'
              onChange={onchangehandler}
            />
          </div>

          {/* Update Button */}
          <button
            className='btn btn-primary px-4'
            onClick={handen1}
          >
            Update
          </button>
        </div>
      ) : (
        <div>Loading profile...</div>
      )}

      {/* Followers List */}
      <div>
        <h6 className='mb-3'>Followers</h6>
        {followers.length > 0 ? (
          followers.map((data) => (
            <div
              key={data.id}
              className='d-flex align-items-center mb-3 p-2 border rounded'
              style={{ background: "#fff" }}
            >
              <div style={{ fontWeight: "500" }}>{data.username}</div>
              <a
                onClick={() => { jk(data.id) }}
                className='ms-auto text-danger'
                style={{ cursor: "pointer", fontSize: "0.9rem" }}
              >
                Unfollow
              </a>
            </div>
          ))
        ) : (
          <div>Loading followers...</div>
        )}
      </div>
    </div>
  );
}

export default Profile;
