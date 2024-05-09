import {
	Grid,
	Heading,
	Box,
	useBreakpointValue,
	Image,
	GridItem,
	Flex,
} from '@chakra-ui/react';
import VolunteerNowButton from '../VolunteerNowButton';

const Hero = ({ title }) => {
	// add the image
	const gridGap = useBreakpointValue({ base: 8, l: 12, xl: 32 });
	const gridTemplateAreas = useBreakpointValue({
		base: `"title" "image" "button"`,
		xl: `"title image" "button image"`,
	});
	const gridTemplateColumns = useBreakpointValue({
		base: '1fr',
		xl: '1fr 1fr',
	});
	const boxPaddingX = useBreakpointValue({ base: 4, md: 8, xl: 16 });
	const internalPaddingY = useBreakpointValue({ base: 0, xl: 4, '2xl': 12 });
	const headingTextAlign = useBreakpointValue({ base: 'center', xl: 'left' });
	const buttonJustify = useBreakpointValue({ base: 'right', xl: 'left' });

	return (
		<Box
			paddingX={boxPaddingX}
			py={6}
			backgroundColor={'gray.50'}
			width={'100%'}
		>
			<Flex justify={'center'}>
				<Grid
					templateAreas={gridTemplateAreas}
					templateColumns={gridTemplateColumns}
					columnGap={gridGap}
					rowGap={8}
				>
					<GridItem gridArea="title" alignSelf={'flex-end'}>
						<Heading as="h3" size="lg" textAlign={headingTextAlign}>
							{title}
						</Heading>
					</GridItem>

					<GridItem gridArea="image" alignSelf="center">
						<Box flex={1}>
							<Image
								src="https://via.placeholder.com/1000x300"
								alt="test image"
								fit="cover"
								maxW="100%"
								height="auto"
							/>
						</Box>
					</GridItem>
					<GridItem
						gridArea="button"
						alignSelf={'center'}
						justifySelf={buttonJustify}
					>
						<VolunteerNowButton />
					</GridItem>
				</Grid>
			</Flex>
		</Box>
	);
};

export default Hero;
