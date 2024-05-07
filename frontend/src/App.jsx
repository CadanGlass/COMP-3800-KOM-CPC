import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ChakraProvider, Box, Text } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Cards from './components/Cards';
import Footer from './components/Footer';

const url = 'http://localhost:1337/api/programs';

function App() {
  const [programTitles, setProgramTitles] = useState([]);

  useEffect(() => {
    axios.get(url)
      .then(response => {
        const titles = response.data.data.map(item => ({
          title: item.attributes.title,
          description: item.attributes.description,
          image: item.attributes.imageUrl
        }));
        setProgramTitles(titles);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setProgramTitles([]);
      });
  }, []);

  if (!programTitles.length) return <Text>Loading...</Text>;

  return (
    <ChakraProvider>
      <Box>
        <NavBar />
        <Banner />
        <Cards cardsData={programTitles} />
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
