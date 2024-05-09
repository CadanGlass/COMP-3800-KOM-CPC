import { Stack, Heading, Box, useBreakpointValue } from '@chakra-ui/react';
import CustomAccordion from '../AccordionMenu';
import { DefaultCard } from '../DefaultComponents';

const FAQCard = ({ faqData }) => {
	const accordionPadding = useBreakpointValue({ base: 0, lg: 4 });

	return (
		<DefaultCard>
			<Stack spacing={4}>
				<Heading as="h3" size="lg" color={'gray.500'} pb={8}>
					{faqData.title}
				</Heading>
				<Box paddingLeft={accordionPadding}>
					<CustomAccordion accordionData={faqData.questions} />
				</Box>
			</Stack>
		</DefaultCard>
	);
};

export default FAQCard;
