

import { useColorMode } from '@chakra-ui/react';
import { Section, PageHeading } from '../components/DefaultComponents';
import MissionCard from '../components/aboutus/mission';
import OurStoryCard from '../components/aboutus/ourStory';
import CatchmentCard from '../components/aboutus/catchment';
import OurPartnersCard from '../components/aboutus/ourPartners';


export default function AboutUsPage() {
  const { colorMode } = useColorMode();
  const getBackground = (darkGradient) =>
    colorMode === 'light' ? '#ffffff' : darkGradient;

  return (
    <>
      <Section
        bg={getBackground('linear-gradient(to bottom, #1a202c, #2d3748)')}
      >
        <PageHeading title="About Us" />
      </Section>

      <Section
        bg={getBackground('linear-gradient(to bottom, #2d3748, #3c4a5e)')}
      >
        <MissionCard/>
      </Section>

      <Section
        bg={getBackground('linear-gradient(to bottom, #3c4a5e, #4a566e)')}
      >
        <OurStoryCard/>
      </Section>

      <Section
        bg={getBackground('linear-gradient(to bottom, #4a566e, #5b6b82)')}
      >
        <CatchmentCard/>
      </Section>

      <Section
        bg={getBackground('linear-gradient(to bottom, #5b6b82, #6c7f96)')}
      >
        <OurPartnersCard/>
      </Section>
    </>
  );
}

