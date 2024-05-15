import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function VolunteerNowButton() {
  return (
    <Link
      to="https://app.betterimpact.com/PublicOrganization/9751335d-c792-494f-83e0-f504c28ed30c/1"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button
        fontSize={'sm'}
        fontWeight={600}
        color={'white'}
        bg={'red.600'}
        _hover={{
          bg: 'red.400',
        }}
      >
        Volunteer Now
      </Button>
    </Link>
  );
}
