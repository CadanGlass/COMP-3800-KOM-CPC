import React from 'react';
import {
	VStack,
	Heading,
	Grid,
	GridItem,
	useMediaQuery,
	Image,
	Text,
	Box,
	Center,
} from '@chakra-ui/react';
import { QuestionIcon } from '@chakra-ui/icons';

const WhyVolunteerSubtextCard = ({ subtextData = {} }) => {
	// icon, title, description
	const icon = <QuestionIcon boxSize={8} alignSelf={'center'} />;

	return (
		<VStack align="left" spacing={4}>
			{icon}
			<Heading as="h5" size="sm" textAlign="center">
				{subtextData.title}
			</Heading>
			<Box spacing={4}>
				{subtextData.description.map((line, index) => (
					<Text
						color={'gray.400'}
						key={`line${index}`}
						textAlign={{ base: 'left' }}
					>
						{line}
					</Text>
				))}
			</Box>
		</VStack>
	);
};

export default WhyVolunteerSubtextCard;
