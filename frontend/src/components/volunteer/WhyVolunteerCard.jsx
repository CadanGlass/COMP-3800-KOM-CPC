import {
	Box,
	Heading,
	Image,
	Text,
	Stack,
	useBreakpointValue,
} from '@chakra-ui/react';
import WhyVolunteerSubtextCard from './WhyVolunteerSubtextCard';

const WhyVolunteerCard = ({ title, description, subtext = [] }) => {
	const stackSpacing = useBreakpointValue({ base: 8, md: 12, xl: 32 });
	const stackDirection = useBreakpointValue({ base: 'column', lg: 'row' });
	const subtextSpacing = useBreakpointValue({ base: 4, md: 8, lg: 16 });
	const subtextDirection = useBreakpointValue({ base: 'column', lg: 'row' });
	const boxPaddingX = useBreakpointValue({ base: 4, md: 8, xl: 16 });

	return (
		<Box
			paddingX={boxPaddingX}
			py={6}
			backgroundColor={'gray.50'}
			width={'100%'}
		>
			<Stack
				direction={stackDirection}
				maxW="100%"
				paddingBottom={useBreakpointValue({ base: 4, md: 8, lg: 16 })}
				spacing={stackSpacing}
			>
				<Box flex={1}>
					<Heading as="h3" size="lg" color={'gray.500'} paddingBottom={8}>
						{title}
					</Heading>
					<Box>
						{description.map((line, index) => (
							<Text key={`line${index}`} paddingBottom={4}>
								{line}
							</Text>
						))}
					</Box>
				</Box>
				{/* decide how to justify the image */}
				<Box flex={1} alignSelf="center">
					<Image
						src="https://via.placeholder.com/1000x300"
						alt="test image"
						fit="cover"
						maxW="100%"
						height="auto"
					/>
				</Box>
			</Stack>
			<Stack direction={subtextDirection} spacing={subtextSpacing}>
				{subtext.map((subtextData, index) => (
					<Box key={`subtext${index}`} flex={1}>
						<WhyVolunteerSubtextCard subtextData={subtextData} />
					</Box>
				))}
			</Stack>
		</Box>
	);
};

export default WhyVolunteerCard;
