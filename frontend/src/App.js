import './App.css';
import { Navigate, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import DiscoverEvents from './pages/DiscoverEvents'; // Import DiscoverEvents
import PostAHelpRequest from './pages/PostAHelpRequest'; // Import PostAHelpRequest
import FormTeams from './pages/FormTeams';
import MyProfile from './pages/MyProfile'
import ProtectedRoute from './components/ProtectedRoute'; // Correct import
import { useState } from 'react';
import RefrshHandler from './RefrshHandler';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" />;
  };

  return (
    <div className="App">
      <RefrshHandler setIsAuthenticated={setIsAuthenticated} />

      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protect /home route */}
        <Route path="/home" element={<PrivateRoute element={<Home />} />} />

        {/* Protect /discover-events route */}
        <Route
          path="/discover-events"
          element={<PrivateRoute element={<DiscoverEvents />} />}
        />

        {/* Protect /post-a-help-request route */}
        <Route
          path="/post-a-help-request"
          element={<PrivateRoute element={<PostAHelpRequest />} />}
        />
        <Route
          path="/Form-Teams"
          element={<PrivateRoute element={<FormTeams />} />}
        />

<Route path="/My-Profile" element={<PrivateRoute element={<MyProfile />} />} />

      </Routes>
    </div>
  );
}

export default App;
