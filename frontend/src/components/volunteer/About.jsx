import {
	Stack,
	Heading,
	Box,
	useBreakpointValue,
	Text,
	Image,
} from '@chakra-ui/react';
import { DefaultCard } from '../DefaultComponents';

const AboutCard = ({ aboutData }) => {
	// add image
	const stackDirection = useBreakpointValue({ base: 'column', xl: 'row' });
	const stackSpacing = useBreakpointValue({ base: 8, lg: 12, xl: 32 });

	return (
		<DefaultCard>
			<Stack direction={stackDirection} spacing={stackSpacing}>
				<Box flex={1} alignSelf={'center'}>
					<Image
						src="https://via.placeholder.com/1000x500"
						alt="test image"
						fit="cover"
						maxW="100%"
						height="auto"
					/>
				</Box>
				<Box flex={1} alignSelf={'center'}>
					{aboutData.map((line, index) => (
						<Text key={`line${index}`} paddingBottom={4}>
							{line}
						</Text>
					))}
				</Box>
			</Stack>
		</DefaultCard>
	);
};
export default AboutCard;
