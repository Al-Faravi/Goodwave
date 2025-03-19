// src/pages/DiscoverEvents.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './DiscoverEvents.css';

const DiscoverEvents = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');

  // Sample event data (replace with real data from an API or database)
  const events = [
    { id: 1, name: 'Tree Plantation at Central Park', category: 'Environmental ,Healthcare', location: 'Dhaka', date: '2023-10-15' },
    { id: 2, name: 'Health Camp at Mirpur', category: 'Healthcare', location: 'Dhaka', date: '2023-11-05' },
    { id: 3, name: 'Community Clean-Up in Gulshan', category: 'Environmental', location: 'Dhaka', date: '2023-12-01' },
    { id: 4, name: 'Blood Donation Drive at Dhaka Medical', category: 'Healthcare', location: 'Dhaka , Sylhet', date: '2024-01-15' },
    { id: 5, name: 'Educational Workshop in Sylhet', category: 'Education , Healthcare', location: 'Sylhet ', date: '2024-02-20' },
    { id: 6, name: 'Food Drive in Chittagong', category: 'Healthcare , Education', location: 'Chittagong', date: '2024-03-05' },
    { id: 7, name: 'Tree Plantation at Central Park', category: 'Environmental ,Healthcare', location: 'Dhaka', date: '2023-10-15' },
    { id: 8, name: 'Health Camp at Mirpur', category: 'Healthcare', location: 'Dhaka', date: '2023-11-05' },
    { id: 9, name: 'Community Clean-Up in Gulshan', category: 'Environmental', location: 'Dhaka', date: '2023-12-01' },
    { id: 10, name: 'Blood Donation Drive at Dhaka Medical', category: 'Healthcare', location: 'Dhaka , Sylhet', date: '2024-01-15' },
    { id: 11, name: 'Educational Workshop in Sylhet', category: 'Education , Healthcare', location: 'Sylhet ', date: '2024-02-20' },
    { id: 12, name: 'Food Drive in Chittagong', category: 'Healthcare , Education', location: 'Chittagong', date: '2024-03-05' },
    { id: 13, name: 'Tree Plantation at Central Park', category: 'Environmental ,Healthcare', location: 'Dhaka', date: '2023-10-15' },
    { id: 14, name: 'Health Camp at Mirpur', category: 'Healthcare', location: 'Dhaka', date: '2023-11-05' },
    { id: 15, name: 'Community Clean-Up in Gulshan', category: 'Environmental', location: 'Dhaka', date: '2023-12-01' },
    { id: 16, name: 'Blood Donation Drive at Dhaka Medical', category: 'Healthcare', location: 'Dhaka , Sylhet', date: '2024-01-15' },
    { id: 17, name: 'Educational Workshop in Sylhet', category: 'Education , Healthcare', location: 'Sylhet ', date: '2024-02-20' },
    { id: 18, name: 'Food Drive in Chittagong', category: 'Healthcare , Education', location: 'Chittagong', date: '2024-03-05' },
  ];

  // Function to filter events based on user inputs
  const filteredEvents = events.filter(event => {
    return (
      (location ? event.location.toLowerCase().includes(location.toLowerCase()) : true) &&
      (category ? event.category.toLowerCase().includes(category.toLowerCase()) : true) &&
      (date ? event.date === date : true)
    );
  });

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleJoinEvent = (eventId) => {
    console.log(`Joined event with ID: ${eventId}`);
  };

  return (
    <div className="discover-events">
      <header>
        <nav>
          <ul>
            <li><Link to="/">Logo</Link></li>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/discover-events">Discover Events</Link></li>
            <li><Link to="/profile">My Profile</Link></li>
            <li>
              <input
                type="text"
                value={search}
                onChange={handleSearchChange}
                placeholder="Search for events"
              />
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <h1>Discover Volunteer Events</h1>
        <div className="filters">
          <input
            type="text"
            value={location}
            onChange={handleLocationChange}
            placeholder="Location (e.g., Dhaka)"
          />
          <select value={category} onChange={handleCategoryChange}>
            <option value="">Select Category</option>
            <option value="environmental">Environmental</option>
            <option value="education">Education</option>
            <option value="healthcare">Healthcare</option>
          </select>
          <input type="date" value={date} onChange={handleDateChange} />
        </div>

        <div className="event-cards">
          {filteredEvents.map(event => (
            <div key={event.id} className="event-card">
              <h3>{event.name}</h3>
              <p>Date: {event.date}</p>
              <p>Location: {event.location}</p>
              <p>Category: {event.category}</p>
              <button onClick={() => handleJoinEvent(event.id)}>Join Event</button>
            </div>
          ))}
        </div>
      </main>

      <footer>
        <ul>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/privacy">Privacy Policy</Link></li>
        </ul>
      </footer>
    </div>
  );
};

export default DiscoverEvents;
