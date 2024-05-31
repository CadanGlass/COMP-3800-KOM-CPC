import React, { useState, useEffect } from 'react';
import { Box, VStack, useColorModeValue, Heading } from '@chakra-ui/react';
import { Section, PageHeading } from '../components/DefaultComponents';
import PartnershipBanner from '../components/home/PartnershipBanner';
import HowCanYouHelpCard from '../components/howCanIHelp/HowCanYouHelpCard';
import SupportUsCard from '../components/howCanIHelp/SupportUsCard';
import axios from 'axios';

const baseURL = 'https://api.komcpc.com';

const HowCanIHelpPage = () => {
  const getBackground = (darkGradient) =>
    useColorModeValue('white', darkGradient);
  const textColor = useColorModeValue('gray.800', 'white');
  const titleColor = useColorModeValue('yellow.400', 'yellow.400');

  const [pageData, setPageData] = useState({});
  const [sponsors, setSponsors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Fetching page data from API...');
        const pageResponse = await axios.get(
          `${baseURL}/api/how-can-i-help-page?populate[HowCanIHelpPage][populate][helpCard]=*&populate[HowCanIHelpPage][populate][supportUsCard]=*`
        );
        console.log('Page API response:', pageResponse.data);

        if (
          pageResponse.data &&
          pageResponse.data.data &&
          pageResponse.data.data.attributes
        ) {
          const apiData = pageResponse.data.data.attributes;
          const pageData = apiData.HowCanIHelpPage;
          console.log('Extracted page data:', pageData);
          setPageData(pageData);
        } else {
          console.warn(
            'Unexpected page API response structure:',
            pageResponse.data
          );
        }

        console.log('Fetching sponsor data from API...');
        const sponsorsResponse = await axios.get(
          `${baseURL}/api/home-page?populate=Sponsors.Logo`
        );
        console.log('Sponsors API response:', sponsorsResponse.data);

        if (sponsorsResponse.data && sponsorsResponse.data.data) {
          const sponsorsData =
            sponsorsResponse.data.data.attributes.Sponsors.map((sponsor) => ({
              name: sponsor.Name,
              url: sponsor.Url,
              logo: `${baseURL}${sponsor.Logo.data.attributes.url}`,
              alternativeText: sponsor.Logo.data.attributes.alternativeText,
            }));
          console.log('Extracted sponsors data:', sponsorsData);
          setSponsors(sponsorsData);
        } else {
          console.warn(
            'Unexpected sponsors API response structure:',
            sponsorsResponse.data
          );
        }
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();
  }, []);

  console.log('Final data state:', pageData);
  console.log('Final sponsors state:', sponsors);

  return (
    <>
      <Section
        bg={getBackground('linear-gradient(to bottom, #1a202c, #2d3748)')}
      >
        <PageHeading title={pageData.title || 'How Can I Help?'} />
      </Section>
      <Section
        bg={getBackground('linear-gradient(to bottom, #2d3748, #3c4a5e)')}
        py={8}
      >
        <Box w="full">
          <PartnershipBanner data={sponsors} />
        </Box>
      </Section>
      <Section
        bg={getBackground('linear-gradient(to bottom, #3c4a5e, #4a5568)')}
        py={8}
      >
        {pageData?.helpCard && (
          <HowCanYouHelpCard
            title={pageData.helpCard.title}
            description={pageData.helpCard.description}
          />
        )}
      </Section>
      <Section
        bg={getBackground('linear-gradient(to bottom, #4a5568, #5a6b78)')}
        py={8}
      >
        {pageData?.supportUsCard && (
          <SupportUsCard
            title={pageData.supportUsCard.title}
            description={pageData.supportUsCard.description}
          />
        )}
      </Section>
    </>
  );
};

export default HowCanIHelpPage;
