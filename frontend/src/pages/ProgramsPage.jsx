import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { VStack, useColorMode } from '@chakra-ui/react';
import ProgramCard from '../components/programs/ProgramCard';
import ProgramsHero from '../components/programs/ProgramsHero';
import { Section, PageHeading } from '../components/DefaultComponents';

export default function ProgramsPage() {
  const [programData, setProgramData] = useState(null);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const { colorMode } = useColorMode();

  const getBackground = (darkGradient) =>
    colorMode === 'light' ? '#ffffff' : darkGradient;

  useEffect(() => {
    axios.get('http://localhost:1337/api/programs/1?populate=*') // Ensure to use ?populate=* to get related data
      .then(response => {
        setProgramData(response.data.data); // Adjust if Strapi returns nested data
      })
      .catch(error => {
        console.error('Error fetching program data:', error);
      });
  }, []);

  const handleLearnMoreClick = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  if (!programData) return <p>Loading...</p>;

  return (
    <>
      <Section bg={getBackground('linear-gradient(to bottom, #1a202c, #2d3748)')}>
        <PageHeading title={programData.attributes.title} />
      </Section>
      <Section bg={getBackground('linear-gradient(to bottom, #2d3748, #3c4a5e)')}>
        <ProgramsHero title={programData.attributes.title} description={programData.attributes.description} />
      </Section>
      <Section bg={getBackground('linear-gradient(to bottom, #3c4a5e, #4a566e)')}>
        <VStack spacing={8}>
          {programData.attributes.activities.map((activity, index) => (
            <ProgramCard
              key={activity.id}
              title={activity.title}
              description={activity.content}
              image={activity.image.url}
              subprograms={programData.attributes.activities}
              isExpanded={index === expandedIndex}
              onLearnMoreClick={() => handleLearnMoreClick(index)}
              isReversed={index % 2 === 1}
            />
          ))}
        </VStack>
      </Section>
    </>
  );
}
