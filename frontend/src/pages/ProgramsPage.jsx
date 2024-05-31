import React, { useState, useEffect } from 'react';
import { VStack, useColorModeValue } from '@chakra-ui/react';
import { Section, PageHeading } from '../components/DefaultComponents';
import ProgramsHero from '../components/programs/ProgramsHero';
import ProgramCard from '../components/programs/ProgramCard';
import axios from 'axios';

const baseURL = 'https://api.komcpc.com';

const ProgramsPage = () => {
  const [pageData, setPageData] = useState({});
  const [programsData, setProgramsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pageResponse = await axios.get(`${baseURL}/api/programs-page`);
        if (pageResponse.data && pageResponse.data.data) {
          setPageData(pageResponse.data.data.attributes);
        }

        const programsResponse = await axios.get(
          `${baseURL}/api/programs?populate=Image,AccordionContents`
        );
        if (programsResponse.data && programsResponse.data.data) {
          setProgramsData(programsResponse.data.data);
        }
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Section
        bg={useColorModeValue(
          'white',
          'linear-gradient(to bottom, #1a202c, #2d3748)'
        )}
      >
        <PageHeading title={pageData.Title} />
      </Section>
      <Section
        bg={useColorModeValue(
          'white',
          'linear-gradient(to bottom, #2d3748, #3c4a5e)'
        )}
      >
        {pageData.Description && (
          <ProgramsHero
            title={pageData.Title}
            description={pageData.Description}
          />
        )}
      </Section>
      <Section
        bg={useColorModeValue(
          'white',
          'linear-gradient(to bottom, #3c4a5e, #4a566e)'
        )}
      >
        <VStack spacing={10} align="start">
          {programsData.map((program, index) => {
            const { Title, Description, Image, AccordionContents } =
              program.attributes;
            const programImageUrl = Image?.data?.attributes?.url
              ? `${baseURL}${Image.data.attributes.url}`
              : '';

            console.log('Program Image URL:', programImageUrl); // Debug log for program image URL

            return (
              <ProgramCard
                key={program.id}
                title={Title}
                description={Description}
                image={programImageUrl}
                accordionContent={
                  AccordionContents
                    ? AccordionContents.map((item) => ({
                        title: item.Title,
                        content: item.Content.map((contentItem) =>
                          typeof contentItem === 'object'
                            ? contentItem.children
                                .map((child) => child.text)
                                .join('')
                            : contentItem
                        ),
                      }))
                    : []
                }
                isReversed={index % 2 === 1}
              />
            );
          })}
        </VStack>
      </Section>
    </>
  );
};

export default ProgramsPage;
