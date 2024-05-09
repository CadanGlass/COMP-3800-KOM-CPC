import { Button } from '@chakra-ui/react';

export default function VolunteerNowButton() {
	return (
		<Button
			as={Button}
			fontSize={'sm'}
			fontWeight={600}
			color={'white'}
			bg={'red.600'}
			href={'#'}
			// TODO: ADD LINK TO VOLUNTEER PAGE
			_hover={{
				bg: 'red.400',
			}}
		>
			Volunteer Now
		</Button>
	);
}
