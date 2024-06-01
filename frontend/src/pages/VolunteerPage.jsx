import { useColorMode } from '@chakra-ui/react';
import VolunteeringActivitiesCard from '../components/volunteer/VolunteeringActivitiesCard';
import WhyVolunteerCard from '../components/volunteer/WhyVolunteerCard';
import FAQCard from '../components/volunteer/FAQ';
import Hero from '../components/volunteer/Hero';
import AboutCard from '../components/volunteer/About';
import { Section, PageHeading } from '../components/DefaultComponents';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function VolunteerPage() {
  const baseURL = 'https://api.komcpc.com';
  const { colorMode } = useColorMode();
  const getBackground = (darkGradient) =>
    colorMode === 'light' ? '#ffffff' : darkGradient;

  const [pageTitle, setPageTitle] = useState('');
  const [heroData, setHeroData] = useState({});
  const [aboutData, setAboutData] = useState({});
  const [activitiesCardData, setActivitiesCardData] = useState({});
  const [whyVolunteerCardData, setWhyVolunteerCardData] = useState({});
  const [faqCardData, setFaqCardData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      axios
        .get(`${baseURL}/api/volunteer-page`)
        .then((response) => {
          if (!response.data) {
            return;
          }

          const apiData = response.data.data.attributes;
          const hero = {
            Title: apiData.Hero.Title,
            Image: `${baseURL}${apiData.Hero.Banner.data.attributes.url}`,
            AlternativeText:
              apiData.Hero.Banner.data.attributes.alternativeText,
          };
          const about = {
            Description: apiData.AboutSection.Description,
            Image: `${baseURL}${apiData.AboutSection.Banner.data.attributes.url}`,
            AlternativeText:
              apiData.AboutSection.Banner.data.attributes.alternativeText,
          };
          const whyVolunteer = {
            Info: apiData.WhyVolunteerCard.Info,
            Subpoint: apiData.WhyVolunteerCard.Subpoint,
            Image: `${baseURL}${apiData.WhyVolunteerCard.Banner.data.attributes.url}`,
            AlternativeText:
              apiData.WhyVolunteerCard.Banner.data.attributes.alternativeText,
          };

          setPageTitle(apiData.PageTitle);
          setHeroData(hero);
          setAboutData(about);
          setActivitiesCardData(apiData.ActivitiesCard);
          setWhyVolunteerCardData(whyVolunteer);
          setFaqCardData(apiData.FAQCard);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching volunteer data:', error);
        });
    };

    fetchData();
  }, []);

  if (loading) {
    return <></>;
  }

  return (
    <>
      <Section
        bg={getBackground('linear-gradient(to bottom, #1a202c, #2d3748)')}
      >
        {pageTitle && <PageHeading title={pageTitle} />}
      </Section>
      <Section
        bg={getBackground('linear-gradient(to bottom, #2d3748, #3c4a5e)')}
      >
        {heroData && <Hero data={heroData} />}
      </Section>
      <Section
        bg={getBackground('linear-gradient(to bottom, #3c4a5e, #4a566e)')}
      >
        {aboutData && <AboutCard data={aboutData} />}
      </Section>
      <Section
        bg={getBackground('linear-gradient(to bottom, #4a566e, #5b6b82)')}
      >
        {activitiesCardData && (
          <VolunteeringActivitiesCard data={activitiesCardData} />
        )}
      </Section>
      <Section
        bg={getBackground('linear-gradient(to bottom, #5b6b82, #6c7f96)')}
      >
        {whyVolunteerCardData && (
          <WhyVolunteerCard data={whyVolunteerCardData} />
        )}
      </Section>
      <Section
        bg={getBackground('linear-gradient(to bottom, #6c7f96, #8a9aad)')}
      >
        {faqCardData && <FAQCard data={faqCardData} />}
      </Section>
    </>
  );
}
