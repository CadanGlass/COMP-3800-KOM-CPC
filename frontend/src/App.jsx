import React, { useState, useEffect } from 'react';
import { ChakraProvider, Box, Text } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Cards from './components/Cards';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import VolunteerPage from './pages/VolunteerPage';
import ProgramsPage from './pages/ProgramsPage';
import EventsPage from './pages/EventsPage';
import NewsletterPage from './pages/NewsletterPage';
import AboutUsPage from './pages/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/volunteer" element={<VolunteerPage />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/newsletter" element={<NewsletterPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
        </Routes>
        <Footer />
      </Router>
    </ChakraProvider>
  );
}

export default App;
