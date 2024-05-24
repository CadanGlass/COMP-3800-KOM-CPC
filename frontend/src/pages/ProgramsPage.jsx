import React, { useState, useEffect } from 'react';
import { VStack, useColorModeValue } from '@chakra-ui/react';
import { Section, PageHeading } from '../components/DefaultComponents';
import ProgramsHero from '../components/programs/ProgramsHero';
import ProgramCard from '../components/programs/ProgramCard';
import axios from 'axios';

const baseURL = 'http://localhost:1337';

const ProgramsPage = () => {
  const [pageData, setPageData] = useState({});
  const [programsData, setProgramsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pageResponse = await axios.get(
          `${baseURL}/api/programs-page?populate=hero`
        );
        if (pageResponse.data && pageResponse.data.data) {
          setPageData(pageResponse.data.data.attributes);
        }

        const programsResponse = await axios.get(
          `${baseURL}/api/programs?populate=Image,AccordionContent`
        );
        if (programsResponse.data && programsResponse.data.data) {
          setProgramsData(programsResponse.data.data);
          console.log('Programs Data:', programsResponse.data.data); // Log the data structure
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
        {pageData.hero && (
          <ProgramsHero
            title={pageData.hero.title}
            description={pageData.hero.description}
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
            const { Title, Description, Image, AccordionContent } =
              program.attributes;
            return (
              <ProgramCard
                key={program.id}
                title={Title}
                description={Description}
                image={`${baseURL}${Image.data.attributes.url}`}
                accordionContent={
                  AccordionContent
                    ? AccordionContent.Content.map((item) => ({
                        title: AccordionContent.Title,
                        content: item.children.map((child) => child.text),
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
