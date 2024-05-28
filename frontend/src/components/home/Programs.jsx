// import { Heading, Stack, SimpleGrid } from '@chakra-ui/react';

// import data from '../../test_data/programs.json';
// import { DefaultCard } from '../DefaultComponents';
// import { ProgramCard } from './ProgramCard';
// import StyledButton from '../buttons/StyledButton';

// const firstThreePrograms = data.programs.slice(0, 3);

// export default function Programs() {
//   return (
//     <>
//       <DefaultCard>
//         <Stack spacing={8}>
//           <Stack
//             direction={{ base: 'column', sm: 'row' }}
//             justify={'space-between'}
//             align={'start'}
//             spacing={8}
//           >
//             <Heading as="h3" size="lg">
//               {data.title}
//             </Heading>
//             <StyledButton href="/programs">View All Programs</StyledButton>
//           </Stack>
//           <p>{data.description}</p>
//           <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
//             {firstThreePrograms.map((program) => (
//               <ProgramCard
//                 key={program.title}
//                 title={program.title}
//                 description={program.description}
//                 image={program.image}
//                 //link={program.link}
//               />
//             ))}
//           </SimpleGrid>
//         </Stack>
//       </DefaultCard>
//     </>
//   );
// }


import { useState, useEffect } from 'react';
import { Heading, Stack, SimpleGrid } from '@chakra-ui/react';
import { DefaultCard } from '../DefaultComponents';
import { ProgramCard } from './ProgramCard';
import StyledButton from '../buttons/StyledButton';
import axios from 'axios';


const baseURL = 'http://localhost:1337';

export default function Programs() {
    
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
      <DefaultCard>
        <Stack spacing={8}>
          <Stack
            direction={{ base: 'column', sm: 'row' }}
            justify={'space-between'}
            align={'start'}
            spacing={8}
          >
            <Heading as="h3" size="lg">
              {pageData.Title}
            </Heading>
            <StyledButton href="/programs">View All Programs</StyledButton>
          </Stack>
          <p>{pageData.Description}</p>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {programsData.map((program, index) => {
            const { Title, Description, Image } =
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
                isReversed={index % 2 === 1}
              />
            );
          })}
          </SimpleGrid>
        </Stack>
      </DefaultCard>
    </>
  );
}

