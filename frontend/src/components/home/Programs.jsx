import { Heading, Stack, Button, SimpleGrid, Link } from '@chakra-ui/react';

import data from '../../test_data/programs.json';
import { DefaultCard } from '../DefaultComponents';
import { ProgramCard } from './ProgramCard';

const firstThreePrograms = data.programs.slice(0, 3);

export default function Programs() {
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
              {data.title}
            </Heading>
            <Link href="/programs">
              <Button
                bg="blue.500"
                color="white"
                _hover={{ color: 'gray.600', bg: 'blue.200' }}
              >
                View All Programs
              </Button>
            </Link>
          </Stack>
          <p>{data.description}</p>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {firstThreePrograms.map((program) => (
              <ProgramCard
                key={program.title}
                title={program.title}
                description={program.description}
                image={program.image}
                link={program.link}
              />
            ))}
          </SimpleGrid>
        </Stack>
      </DefaultCard>
    </>
  );
}
