import React, { useState } from 'react';
import { VStack, useColorMode } from '@chakra-ui/react';
import ProgramCard from '../components/programs/ProgramCard';
import ProgramsHero from '../components/programs/ProgramsHero';
import { Section, PageHeading } from '../components/DefaultComponents';
import data from '../test_data/programs.json';

const heroTitle = data.title;
const heroDescription = data.description;
const programs = data.programs;

export default function ProgramsPage() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const { colorMode } = useColorMode();
  const getBackground = (darkGradient) =>
    colorMode === 'light' ? '#ffffff' : darkGradient;

  const handleLearnMoreClick = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <>
      <Section
        bg={getBackground('linear-gradient(to bottom, #1a202c, #2d3748)')}
      >
        <PageHeading title={heroTitle} />
      </Section>
      <Section
        bg={getBackground('linear-gradient(to bottom, #2d3748, #3c4a5e)')}
      >
        <ProgramsHero title={heroTitle} description={heroDescription} />
      </Section>
      <Section
        bg={getBackground('linear-gradient(to bottom, #3c4a5e, #4a566e)')}
      >
        <VStack spacing={8}>
          {programs.map((program, index) => (
            <ProgramCard
              key={index}
              title={program.title}
              description={program.description}
              image={program.image}
              subprograms={program.subprograms}
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
