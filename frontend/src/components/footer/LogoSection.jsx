import { Box, VStack, Link, Text, Avatar } from '@chakra-ui/react';

import KOM_logo from '../../assets/KOM_Logo.png';

const LogoSection = () => {
  return (
    <VStack spacing={4} align={{ base: 'center', lg: 'flex-start' }}>
      <Link
        display="flex"
        alignItems="center"
        href="/"
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Avatar size="2xl" src={KOM_logo} />
        <Text fontSize="md" ml={2} fontWeight="semibold">
          KOM CPC <br />
          6070 East Boulevard,
          <br />
          Vancouver BC, Canada
        </Text>
      </Link>
    </VStack>
  );
};

export default LogoSection;
