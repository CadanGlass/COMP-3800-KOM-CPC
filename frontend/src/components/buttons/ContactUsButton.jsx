import { Button, Link } from '@chakra-ui/react';

export default function ContactUsButton() {
  return (
    <Link href="/contact-us">
      <Button
        fontSize={'sm'}
        fontWeight={600}
        color={'white'}
        bg={'red.600'}
        _hover={{
          bg: 'red.400',
        }}
      >
        Contact Us
      </Button>
    </Link>
  );
}
