import React from 'react';

import {
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	Box,
	Text,
} from '@chakra-ui/react';

const VolunteerAccordion = ({ volunteerData: data = [] }) => {
	if (!data.length) {
		return <Text>No data to display</Text>;
	}

	return (
		<Accordion allowMultiple>
			{data.map((volunteer, index) => (
				<AccordionItem key={index} paddingY={4}>
					<h2>
						<AccordionButton p={4}>
							<Box flex="1" textAlign="left">
								<Text as="b"> {volunteer.title} </Text>
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4}>{volunteer.description}</AccordionPanel>
				</AccordionItem>
			))}
		</Accordion>
	);
};

export default VolunteerAccordion;
