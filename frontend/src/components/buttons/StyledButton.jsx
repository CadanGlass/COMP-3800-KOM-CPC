// components/StyledButton.jsx
import { Button, Link } from '@chakra-ui/react';

const StyledButton = ({ href, children }) => {
  return (
    <Link href={href}>
      <Button
        fontSize={'sm'}
        fontWeight={600}
        color={'white'}
        bgGradient="linear(to-r, blue.500, blue.700)"
        _hover={{
          bgGradient: 'linear(to-r, blue.600, blue.800)',
          transform: 'scale(1.05)',
        }}
        _active={{
          bgGradient: 'linear(to-r, blue.700, blue.900)',
        }}
        borderRadius="md"
        boxShadow="lg"
        transition="all 0.2s ease-in-out"
      >
        {children}
      </Button>
    </Link>
  );
};

export default StyledButton;
