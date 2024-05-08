import { Stack, Heading, Box, useBreakpointValue } from '@chakra-ui/react';
import CustomAccordion from '../AccordionMenu';

const FAQCard = ({ faqData }) => {
	const accordionPadding = useBreakpointValue({ base: 0, lg: 4 });
	const boxPaddingX = useBreakpointValue({ base: 4, md: 8, xl: 16 });

	return (
		<Box
			paddingX={boxPaddingX}
			py={6}
			backgroundColor={'gray.50'}
			width={'100%'}
		>
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
