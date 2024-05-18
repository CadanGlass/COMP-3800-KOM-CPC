// components/VolunteerNowButton.jsx
import { Button, Link } from '@chakra-ui/react';

export default function VolunteerNowButton() {
  return (
    <Link href="/volunteer">
      <Button
        fontSize={'sm'}
        fontWeight={600}
        color={'white'}
        bgGradient="linear(to-r, red.500, red.700)"
        _hover={{
          bgGradient: 'linear(to-r, red.600, red.800)',
          transform: 'scale(1.05)',
        }}
        _active={{
          bgGradient: 'linear(to-r, red.700, red.900)',
        }}
        borderRadius="md"
        boxShadow="lg"
        transition="all 0.2s ease-in-out"
      >
        Volunteer Now
      </Button>
    </Link>
  );
}
