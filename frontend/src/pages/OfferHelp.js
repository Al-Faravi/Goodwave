// OfferHelp.js
import React, { useState } from "react";
import "./OfferHelp.css"; // Import the corresponding CSS file

const OfferHelp = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [urgency, setUrgency] = useState("");

  const helpRequests = [
    // Dummy data for help requests
    {
      title: "Tutoring Volunteers",
      urgency: "Medium",
      location: "Downtown",
      description: "Help kids with math!",
    },
    {
      title: "Food Drive Volunteers",
      urgency: "Urgent",
      location: "City Center",
      description: "Donate food to families in need.",
    },
  ];

  const handleSearchChange = (e) => setSearchQuery(e.target.value);

  return (
    <div className="offer-help">
      <header className="navbar">
        <div className="navbar-logo">HandsOn</div>
        <nav>
          <a href="/home">Home</a>
          <a href="/events">Discover Events</a>
          <a href="/profile">My Profile</a>
        </nav>
        <input
          type="text"
          className="search-bar"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </header>

      <main>
        <h1>Offer Help</h1>
        <div className="filters">
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">Category</option>
            <option value="education">Education</option>
            <option value="healthcare">Healthcare</option>
            <option value="environmental">Environmental</option>
          </select>
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <select value={urgency} onChange={(e) => setUrgency(e.target.value)}>
            <option value="">Urgency Level</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="urgent">Urgent</option>
          </select>
        </div>

        <div className="help-request-cards">
          {helpRequests
            .filter((request) =>
              request.title.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .map((request, index) => (
              <div key={index} className="help-card">
                <h2>{request.title}</h2>
                <p>Urgency: {request.urgency}</p>
                <p>Location: {request.location}</p>
                <p>{request.description}</p>
                <button className="offer-help-btn">Offer Help</button>
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

export default OfferHelp;
