import CustomAccordion from '../AccordionMenu';
import { Box, Heading, Stack, useBreakpointValue } from '@chakra-ui/react';
import { DefaultCard } from '../DefaultComponents';

const VolunteeringActivitiesCard = ({ volunteerData, title, description }) => {
	const stackSpacing = useBreakpointValue({ base: 8, md: 12, xl: 32 });

	return (
		<DefaultCard>
			<Stack direction={['column', 'row']} maxW="100%" spacing={stackSpacing}>
				<Box flex={1}>
					<Heading as="h3" size="lg" color={'gray.500'} pb={8}>
						{title}
					</Heading>
					<p>{description}</p>
				</Box>
				<Box flex={1}>
					<CustomAccordion accordionData={volunteerData} />
				</Box>
			</Stack>
		</DefaultCard>
	);
};

export default VolunteeringActivitiesCard;
