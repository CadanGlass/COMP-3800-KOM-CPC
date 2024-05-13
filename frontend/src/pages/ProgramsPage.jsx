import { VStack, useBreakpointValue, Container } from '@chakra-ui/react';
import ProgramActivitiesCard from '../components/programs/ProgramActivitiesCard';
import ProgramsHero from '../components/programs/ProgramsHero';

import { DefaultPage } from '../components/DefaultComponents';
import data from '../test_data/programs.json';

const heroTitle = data.title;
const aboutDescription = data.description;
const programs = data.programs;

export default function ProgramsPage() {
  return (
    <DefaultPage>
      <ProgramsHero title={heroTitle} />
      {programs.map((program, index) => (
        <ProgramActivitiesCard
          key={index}
          subprograms={program.subprograms}
          title={program.title}
          description={program.description}
        />
      ))}
    </DefaultPage>
  );
}
