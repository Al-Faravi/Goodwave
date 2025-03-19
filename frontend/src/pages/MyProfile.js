import React from "react";
import "./MyProfile.css";

const MyProfile = () => {
  // User data (hardcoded for now, you can replace it with dynamic data later)
  const user = {
    name: "Al Faravi",
    email: "alfaravi7w@gmail.com",
    password: "1234",
    skills: ["Programming", "Machine Learning", "Mentoring"],
    causesSupported: ["Ethics", "Environment", "Healthcare"]
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h2>My Profile</h2>
      </div>
      
      <div className="profile-card">
        <div className="profile-info">
          <div className="profile-details">
            <h3 className="profile-name">{user.name}</h3>
            <p className="profile-email">{user.email}</p>
          </div>
          
          <div className="profile-section">
            <h4>Skills</h4>
            <ul className="skills-list">
              {user.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>

          <div className="profile-section">
            <h4>Causes Supported</h4>
            <ul className="causes-list">
              {user.causesSupported.map((cause, index) => (
                <li key={index}>{cause}</li>
              ))}
            </ul>
          </div>

          <button className="edit-profile-btn">Edit Profile</button>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
