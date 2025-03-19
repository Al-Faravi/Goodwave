import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import { handleSuccess } from '../utils';
import { ToastContainer } from 'react-toastify';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import About from '../components/About';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

function Home() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('loggedInUser');
        handleSuccess('User Logged out');
        setTimeout(() => navigate('/login'), 1000);
    };

    return (
        <div>
            {/* Navbar */}
            <Navbar />

            {/* Hero Section */}
            <HeroSection />

            {/* About Section */}
            <About />

            {/* Services Section */}
            <Services />

            {/* Contact Section */}
            <Contact />

            {/* Logout Button */}
           

            {/* Footer */}
            <Footer />

            {/* Toast Notifications */}
            <ToastContainer />
        </div>
    );
}

export default Home;
