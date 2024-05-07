import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Text } from '@chakra-ui/react';

import Banner from '../components/Banner';
import Cards from '../components/Cards';

const url = 'http://localhost:1337/api/programs';

export default function HomePage() {
  const [programTitles, setProgramTitles] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        const titles = response.data.data.map((item) => ({
          title: item.attributes.title,
          description: item.attributes.description,
          image: item.attributes.imageUrl,
        }));
        setProgramTitles(titles);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setProgramTitles([]);
      });
  }, []);

  if (!programTitles.length) return <Text>Loading...</Text>;

  return (
    <>
      <Banner />
      <Cards cardsData={programTitles} />
    </>
  );
}
