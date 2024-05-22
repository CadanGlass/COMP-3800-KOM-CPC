import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { VStack, useColorMode, Box, Text } from '@chakra-ui/react';
import ProgramCard from '../components/programs/ProgramCard';
import ProgramsHero from '../components/programs/ProgramsHero';
import { Section, PageHeading } from '../components/DefaultComponents';

const baseUrl = 'http://localhost:1337'; // Base URL for Strapi images

export default function ProgramsPage() {
  const [programData, setProgramData] = useState(null);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const { colorMode } = useColorMode();

  const getBackground = (darkGradient) =>
    colorMode === 'light' ? '#ffffff' : darkGradient;

  useEffect(() => {
    axios
      .get('http://localhost:1337/api/programs?populate=*')
      .then((response) => {
        setProgramData(response.data.data);
      })
      .catch((error) => {
        console.error('Error fetching program data:', error);
      });
  }, []);

  const handleLearnMoreClick = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  if (!programData) return <Box>Loading...</Box>;

  return (
    <>
      <Section bg={getBackground('linear-gradient(to bottom, #1a202c, #2d3748)')}>
        <PageHeading title="Programs" />
      </Section>
      <Section bg={getBackground('linear-gradient(to bottom, #2d3748, #3c4a5e)')}>
        <ProgramsHero title="Our Programs" description="Learn more about our various programs and initiatives." />
      </Section>
      <Section bg={getBackground('linear-gradient(to bottom, #3c4a5e, #4a566e)')}>
        <VStack spacing={8}>
          {programData.map((program, index) => (
            <ProgramCard
              key={program.id}
              title={program.attributes.title}
              description={program.attributes.description}
              image={program.attributes.image ? `${baseUrl}${program.attributes.image.data.attributes.url}` : ''}
              subprograms={program.attributes.activities || []}
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
