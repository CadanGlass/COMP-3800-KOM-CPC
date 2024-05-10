import React, { useState } from 'react';
import { Container, Text, CloseButton } from '@chakra-ui/react';

const callPoliceBanner = () => {
	const [isVisible, setIsVisible] = useState(true);

	const handleClose = () => {
		setIsVisible(false);
	};

	return (
		<>
			{isVisible && (
				<Container
					backgroundColor={'red'}
					minW={'100%'}
					textAlign="center"
					alignItems="center"
					py={'0.3em'}
					display="flex"
					justifyContent="space-between"
				>
					<Text textColor={'white'} as="b" mx="auto">
						{
							'If you need an immediate response from police, fire, or ambulance, please call 911'
						}
					</Text>

					<CloseButton color={'white'} onClick={handleClose} />
				</Container>
			)}
		</>
	);
};

export default callPoliceBanner;
