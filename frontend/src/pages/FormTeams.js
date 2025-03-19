// FormTeams.js
import React, { useState } from "react";
import "./FormTeams.css"; // Import the corresponding CSS file

const FormTeams = () => {
  const [teamName, setTeamName] = useState("");
  const [teamDescription, setTeamDescription] = useState("");
  const [teamType, setTeamType] = useState("public");

  const teams = [
    // Dummy data for teams
    {
      name: "Green Warriors",
      description: "Plant trees every month.",
      type: "Public",
    },
    {
      name: "Food for All",
      description: "Collecting food donations for the homeless.",
      type: "Private",
    },
  ];

  const handleCreateTeam = () => {
    console.log("Creating team:", teamName, teamDescription, teamType);
    // Add your API call logic here
  };

  return (
    <div className="form-teams">
      <header className="navbar">
        <div className="navbar-logo">HandsOn</div>
        <nav>
          <a href="/home">Home</a>
          <a href="/events">Discover Events</a>
          <a href="/profile">My Profile</a>
        </nav>
      </header>

      <main>
        <h1>Form Teams</h1>
        <button className="create-team-btn" onClick={() => handleCreateTeam()}>
          Create Team
        </button>

        <div className="create-team-form">
          <input
            type="text"
            placeholder="Team Name"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
          />
          <textarea
            placeholder="Team Description"
            value={teamDescription}
            onChange={(e) => setTeamDescription(e.target.value)}
          />
          <select
            value={teamType}
            onChange={(e) => setTeamType(e.target.value)}
          >
            <option value="public">Public</option>
            <option value="private">Private</option>
          </select>
          <button onClick={handleCreateTeam}>Create</button>
        </div>

        <div className="team-cards">
          {teams.map((team, index) => (
            <div key={index} className="team-card">
              <h2>{team.name}</h2>
              <p>{team.description}</p>
              <p>Type: {team.type}</p>
              <button className="join-team-btn">Join Team</button>
            </div>
          ))}
        </div>
      </main>

      <footer className="footer">
        <p>About Us | Contact Us | Privacy Policy</p>
      </footer>
    </div>
  );
};

export default FormTeams;
