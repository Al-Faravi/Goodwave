// src/pages/PostAHelpRequest.js
import React, { useState } from 'react';
import './PostAHelpRequest.css';

const PostAHelpRequest = () => {
  const [request, setRequest] = useState('');

  const handleRequestChange = (e) => {
    setRequest(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Help request submitted:', request);
  };

  return (
    <div className="post-a-help-request">
      <h1>Post a Help Request</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={request}
          onChange={handleRequestChange}
          placeholder="Describe the help you need"
        />
        <button type="submit">Post Request</button>
      </form>
    </div>
  );
};

export default PostAHelpRequest;
