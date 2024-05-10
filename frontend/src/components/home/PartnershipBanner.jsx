import React, { useState, useEffect } from 'react';
import { Box, HStack } from '@chakra-ui/react';

const PartnershipBanner = () => {
	const [scrollPosition, setScrollPosition] = useState(0);

	useEffect(() => {
		const scrollInterval = setInterval(() => {
			setScrollPosition((prevPosition) => prevPosition + 1);
		}, 50); // Adjust the interval for smoother or faster scrolling

		return () => clearInterval(scrollInterval);
	}, []);

	return (
		<Box width="50px" overflowWrap={1} className="scrolling-banner-container">
			<HStack display="flex" transform={`translateX(-${scrollPosition}px)`}>
				{/* Add your banner content here */}
				<Box backgroundColor="tomato" width="100px" height="50px" m={2}>
					Banner Item 1
				</Box>
				<Box backgroundColor="lightblue" width="100px" height="50px" m={2}>
					Banner Item 2
				</Box>
				<Box backgroundColor="lightgreen" width="100px" height="50px" m={2}>
					Banner Item 3
				</Box>
				{/* Repeat your banner items as needed */}
			</HStack>
		</Box>
	);
};

export default PartnershipBanner;
