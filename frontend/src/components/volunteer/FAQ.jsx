import { Stack, Heading, Box, useBreakpointValue } from '@chakra-ui/react';
import CustomAccordion from '../AccordionMenu';

const FAQCard = ({ faqData }) => {
	const accordionPadding = useBreakpointValue({ base: 0, lg: 4 });
	return (
		<Box paddingX={[4, 8]} py={4} backgroundColor={'gray.50'} width={'100%'}>
			<Stack spacing={4}>
				<Heading as="h3" size="lg" color={'gray.500'} pb={8}>
					{faqData.title}
				</Heading>
				<Box paddingLeft={accordionPadding}>
					<CustomAccordion accordionData={faqData.questions} />
				</Box>
			</Stack>
		</Box>
	);
};

export default FAQCard;
