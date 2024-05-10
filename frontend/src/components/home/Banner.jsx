import { Box, Image, Text, VStack, Heading, Spacer } from '@chakra-ui/react';

const Banner = () => (
	<VStack justify="center" maxW={'1200px'}>
		<Image
			src="https://via.placeholder.com/1200x400"
			alt="Banner"
			fit="cover"
			width="full"
			height="full"
		/>
		<Heading as="h1" size="xl" paddingTop={8} textAlign={'center'}>
			{'Welcome to the KOM CPC'}
		</Heading>

		<Text fontSize="x-large" textAlign={'center'}>
			Kerrisdale Oakridge Marpole Community Policing Centre
		</Text>
	</VStack>
);

export default Banner;
