import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function DonateButton() {
  return (
    <Link to="https://www.canadahelps.org/en/dn/81226">
      <Button
        fontSize={'md'}
        fontWeight={600}
        color={'white'}
        bg={'red.600'}
        _hover={{
          bg: 'red.400',
        }}
      >
        Donate
      </Button>
    </Link>
  );
}
