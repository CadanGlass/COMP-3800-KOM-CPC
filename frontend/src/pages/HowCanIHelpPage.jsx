import React, { useState, useEffect } from 'react';
import { Box, VStack, useColorModeValue, Heading } from '@chakra-ui/react';
import { Section, PageHeading } from '../components/DefaultComponents';
import PartnersCarousel from '../components/howCanIHelp/PartnersCarousel';
import HowCanYouHelpCard from '../components/howCanIHelp/HowCanYouHelpCard';
import SupportUsCard from '../components/howCanIHelp/SupportUsCard';
import axios from 'axios';

const baseURL = 'http://localhost:1337';

const HowCanIHelpPage = () => {
  const getBackground = (darkGradient) =>
    useColorModeValue('white', darkGradient);
  const textColor = useColorModeValue('gray.800', 'white');

  const [pageData, setPageData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Fetching data from API...');
        const response = await axios.get(
          `${baseURL}/api/how-can-i-help-page?populate[HowCanIHelpPage][populate][helpCard]=*&populate[HowCanIHelpPage][populate][supportUsCard]=*`
        );
        console.log('API response:', response.data);

        if (
          response.data &&
          response.data.data &&
          response.data.data.attributes
        ) {
          const apiData = response.data.data.attributes;
          const pageData = apiData.HowCanIHelpPage;
          console.log('Extracted data:', pageData);
          setPageData(pageData);
        } else {
          console.warn('Unexpected API response structure:', response.data);
        }
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();
  }, []);

  console.log('Final data state:', pageData);

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
        <VStack spacing={8}>
          <Heading as="h2" size="lg" textAlign="center" color={textColor}>
            Our Partners
          </Heading>
          <Box w="full">
            <PartnersCarousel />
          </Box>
        </VStack>
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
