import { VStack, useBreakpointValue, Container } from '@chakra-ui/react';
import VolunteeringActivitiesCard from '../components/volunteer/VolunteeringActivitiesCard';
import Hero from '../components/volunteer/Hero';
import AboutCard from '../components/volunteer/About';
import { DefaultPage } from '../components/DefaultComponents';
import data from '../test_data/volunteer/volunteer_page.json';

const heroTitle = data.HeroTitle;
const about = data.About.description;
const activities = data.Activities[0];
const why = data.WhyVolunteer[0];
const faq = data.FAQs[0];

export default function ProgramsPage() {
  return (
    <DefaultPage>
      <Hero title={heroTitle} />
      <AboutCard aboutData={about} />
      <VolunteeringActivitiesCard
        volunteerData={activities.volunteerData}
        title={activities.title}
        description={activities.description}
      />
      <VolunteeringActivitiesCard
        volunteerData={activities.volunteerData}
        title={activities.title}
        description={activities.description}
      />
      <VolunteeringActivitiesCard
        volunteerData={activities.volunteerData}
        title={activities.title}
        description={activities.description}
      />

    </DefaultPage>
  );
}
