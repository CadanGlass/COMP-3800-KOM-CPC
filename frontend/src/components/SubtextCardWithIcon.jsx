import React from 'react';
import { VStack, Heading, Text, Box } from '@chakra-ui/react';
import { QuestionIcon } from '@chakra-ui/icons';

const SubtextCardWithIcon = ({ subtextData = {}, spacing = 4 }) => {
	// icon, title, description
	const icon = <QuestionIcon boxSize={8} alignSelf={'center'} />;
	return (
		<VStack align="left" spacing={spacing}>
			{icon}
			<Heading as="h5" size="md" textAlign="center">
				{subtextData.title}
			</Heading>
			<Box spacing={4}>
				{subtextData.description.map((line, index) => (
					<Text
						color={'gray.500'}
						key={`line${index}`}
						textAlign={{ base: 'left' }}
						paddingBottom={4}
					>
						{line}
					</Text>
				))}
			</Box>
		</VStack>
	);
};

export default SubtextCardWithIcon;
