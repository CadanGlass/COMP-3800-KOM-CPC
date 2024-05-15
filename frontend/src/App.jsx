import React from 'react';
import { ChakraProvider, Box, Flex } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import VolunteerPage from './pages/VolunteerPage';
import ProgramsPage from './pages/ProgramsPage';
import EventsPage from './pages/EventsPage';
import NewsletterPage from './pages/NewsletterPage';
import AboutUsPage from './pages/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage';
import ShieldYourSipPage from './pages/ShieldYourSipPage';
import NewsEventsPage from './pages/NewsEventsPage';
import ResourcesPage from './pages/ResourcesPage';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Box display="flex" flexDirection="column" minHeight="100vh">
          <Flex position={'fixed'} w={'100%'} zIndex={200}>
            <NavBar />
          </Flex>
          <Box flex="1" mt={16}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/volunteer" element={<VolunteerPage />} />
              <Route path="/programs" element={<ProgramsPage />} />
              <Route path="/shield-your-sip" element={<ShieldYourSipPage />} />
              <Route path="/news-events" element={<NewsEventsPage />} />
              <Route path="/about-us" element={<AboutUsPage />} />
              <Route path="/resources" element={<ResourcesPage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/newsletter" element={<NewsletterPage />} />
              <Route path="/contact-us" element={<ContactUsPage />} />
            </Routes>
          </Box>
          <Footer />
        </Box>
      </Router>
    </ChakraProvider>
  );
}

export default App;
