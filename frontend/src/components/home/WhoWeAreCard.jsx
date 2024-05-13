import { DefaultCard } from '../DefaultComponents';
import SubtextCardWithIcon from '../SubtextCardWithIcon';
import {
	Box,
	Stack,
	Spacer,
	useBreakpointValue,
	Heading,
	Text,
} from '@chakra-ui/react';

const WhoWeAreCard = ({ data }) => {
	const stackSpacing = useBreakpointValue({ base: 8, md: 12, xl: 32 });
	const subPoints = data.subPoints;

	return (
		<DefaultCard
			backgroundColor="none"
			internalPaddingX={useBreakpointValue({ base: 4, md: 24, xl: 48 })}
		>
			<Heading as="h3" size="lg" pb={8} textAlign={'center'}>
				{data.title}
			</Heading>
			<Text fontSize="lg" pb={8} textAlign={'center'}>
				{data.intro}
			</Text>
			<Stack direction={{ base: 'column', md: 'row' }} spacing={stackSpacing}>
				{subPoints.map((subtextData, index) => {
					return (
						<Stack
							direction="column"
							key={`subtext${index}`}
							spacing={{ base: 2, md: 4 }}
							flex={1}
						>
							<Box bg="gray.200" h={2} />
							<Box pb={{ base: 0, md: 4 }} />
							<SubtextCardWithIcon
								subtextData={subtextData}
								spacing={{ base: 4, md: 8 }}
							/>

							<Spacer />

							<Box bg="gray.200" h={2} />
						</Stack>
					);
				})}
			</Stack>
		</DefaultCard>
	);
};

export default WhoWeAreCard;
