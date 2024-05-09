import { Box, VStack, useBreakpointValue, Container } from '@chakra-ui/react';

export const DefaultPage = ({ children, stackSpacing = 8, padding }) => {
	if (padding === undefined) {
		padding = useBreakpointValue({ base: 4, lg: 16 });
	}
	return (
		<Container maxW="1700px" py={4} px={padding}>
			<VStack spacing={stackSpacing} width={'100%'}>
				{children}
			</VStack>
		</Container>
	);
};

export const DefaultVStack = ({ children, spacing = 4 }) => {
	return (
		<VStack spacing={spacing} align="center">
			{children}
		</VStack>
	);
};

export const DefaultCard = ({
	children,
	internalPaddingX,
	internalPaddingY = 6,
	borderRadius = 'xl',
}) => {
	if (internalPaddingX === undefined) {
		internalPaddingX = useBreakpointValue({ base: 4, md: 8, xl: 16 });
	}
	return (
		<Box
			px={internalPaddingX}
			py={internalPaddingY}
			backgroundColor={'gray.50'}
			width={'100%'}
			borderRadius={borderRadius}
		>
			{children}
		</Box>
	);
};
