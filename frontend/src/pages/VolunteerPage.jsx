import {
  VStack,
  useBreakpointValue,
  Container,
  useColorMode,
} from '@chakra-ui/react';
import VolunteeringActivitiesCard from '../components/volunteer/VolunteeringActivitiesCard';
import WhyVolunteerCard from '../components/volunteer/WhyVolunteerCard';
import FAQCard from '../components/volunteer/FAQ';
import Hero from '../components/volunteer/Hero';
import AboutCard from '../components/volunteer/About';
import { Section, PageHeading } from '../components/DefaultComponents';
import data from '../test_data/volunteer/volunteer_page.json';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';

const heroTitle = data.HeroTitle;
const about = data.About.description;
const activities = data.Activities[0];
const why = data.WhyVolunteer[0];
const faq = data.FAQs[0];

export default function VolunteerPage() {
  const baseURL = 'http://localhost:1337';
  const { colorMode } = useColorMode();
  const getBackground = (darkGradient) =>
    colorMode === 'light' ? '#ffffff' : darkGradient;

  const [volunteerData, setVolunteerData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      axios
        .get(`${baseURL}/api/volunteer-page`)
        .then((response) => {
          if (!response.data) {
            return;
          }
          const apiData = response.data.data.attributes;
          setVolunteerData(apiData);
        })
        .catch((error) => {
          console.error('Error fetching volunteer data:', error);
        });
    };

    fetchData();
  }, []);

  return (
    <>
      {/* <BlocksRenderer content={data} /> */}
      {console.log(volunteerData)}
      <Section
        bg={getBackground('linear-gradient(to bottom, #1a202c, #2d3748)')}
      >
        <PageHeading title="Volunteer with KOM CPC" />
      </Section>
      <Section
        bg={getBackground('linear-gradient(to bottom, #2d3748, #3c4a5e)')}
      >
        <Hero title={heroTitle} />
      </Section>
      <Section
        bg={getBackground('linear-gradient(to bottom, #3c4a5e, #4a566e)')}
      >
        <AboutCard aboutData={about} />
      </Section>
      <Section
        bg={getBackground('linear-gradient(to bottom, #4a566e, #5b6b82)')}
      >
        <VolunteeringActivitiesCard
          volunteerData={activities.volunteerData}
          title={activities.title}
          description={activities.description}
        />
      </Section>
      <Section
        bg={getBackground('linear-gradient(to bottom, #5b6b82, #6c7f96)')}
      >
        <WhyVolunteerCard
          title={why.title}
          description={why.description}
          subtext={why.subtext}
        />
      </Section>
      <Section
        bg={getBackground('linear-gradient(to bottom, #6c7f96, #8a9aad)')}
      >
        <FAQCard faqData={faq} />
      </Section>
    </>
  );
}
