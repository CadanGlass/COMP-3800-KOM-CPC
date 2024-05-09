import {
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	Box,
	Text,
} from '@chakra-ui/react';

const CustomAccordion = ({ accordionData: data = [] }) => {
	if (!data.length) {
		return <Text>No data to display</Text>;
	}

	return (
		<Accordion allowMultiple>
			{data.map((item, index) => (
				<AccordionItem key={index} paddingY={4}>
					<h2>
						<AccordionButton p={'4px 4px 4px 0px'}>
							<Box flex={1} textAlign="left">
								<Text as="b"> {item.title} </Text>
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4} pl={0}>
						{item.description.map((line, index) => (
							<Text key={`line${index}`} paddingTop={4}>
								{line}
							</Text>
						))}
					</AccordionPanel>
				</AccordionItem>
			))}
		</Accordion>
	);
};

export default CustomAccordion;
