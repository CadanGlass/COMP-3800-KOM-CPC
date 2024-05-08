import React from 'react';

import VolunteerAccordion from '../AccordionMenu';
import { Box, Heading, Grid, GridItem, useMediaQuery } from '@chakra-ui/react';

const VolunteeringActivitiesCard = ({ volunteerData, title, description }) => {
	const [isLargeScreen] = useMediaQuery('(min-width: 800px)');

	return (
		<Grid
			templateAreas={
				!isLargeScreen
					? `"header" "description" "accordion"`
					: `"header accordion" "description accordion"`
			}
			gridTemplateRows={!isLargeScreen ? 'auto auto auto' : '50px 1fr'}
			gridTemplateColumns={!isLargeScreen ? '1fr' : '1fr 1fr'}
			rowGap={4}
			columnGap={16}
			paddingX={!isLargeScreen ? 4 : 8}
			marginX={!isLargeScreen ? 4 : 16}
			py={4}
			backgroundColor={'gray.50'}
		>
			<GridItem gridArea="header">
				<Heading as="h3" size="lg" color={'gray.500'}>
					{title}
				</Heading>
			</GridItem>
			<GridItem gridArea="description">
				<Box>
					<p>{description}</p>
				</Box>
			</GridItem>
			<GridItem gridArea="accordion">
				<VolunteerAccordion volunteerData={volunteerData} />
			</GridItem>
		</Grid>
	);
};
export default VolunteeringActivitiesCard;
