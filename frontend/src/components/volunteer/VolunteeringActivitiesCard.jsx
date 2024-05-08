import CustomAccordion from '../AccordionMenu';
import { Box, Heading, Stack, useBreakpointValue } from '@chakra-ui/react';

const VolunteeringActivitiesCard = ({ volunteerData, title, description }) => {
	const stackSpacing = useBreakpointValue({ base: 8, md: 12, lg: 32 });

	return (
		<Box paddingX={[4, 8]} py={4} backgroundColor={'gray.50'} width={'100%'}>
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
		</Box>
	);
};

export default VolunteeringActivitiesCard;
