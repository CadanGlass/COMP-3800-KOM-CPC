import { VStack } from '@chakra-ui/react';
import ProgramCard from '../components/programs/ProgramCard';
import ProgramsHero from '../components/programs/ProgramsHero';
import { DefaultPage } from '../components/DefaultComponents'; // Ensure this path is correct
import data from '../test_data/programs.json';

const heroTitle = data.title;
const heroDescription = data.description;
const programs = data.programs;

export default function ProgramsPage() {
  return (
    <DefaultPage>
      <ProgramsHero title={heroTitle} description={heroDescription} />
      <VStack spacing={8}>
        {programs.map((program, index) => (
          <ProgramCard
            key={index}
            title={program.title}
            description={program.description}
            image={program.image}
            learnMoreLink={program.learnMoreLink}
            subprograms={program.subprograms}
          />
        ))}
      </VStack>
    </DefaultPage>
  );
}
