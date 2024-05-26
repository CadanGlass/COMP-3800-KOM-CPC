import { Button, Link, Box } from '@chakra-ui/react';
import { css, keyframes } from '@emotion/react';

const animateBorder = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const buttonWrapperStyle = css`
  position: relative;
  padding: 4px;
`;

const buttonBgStyle = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    #ff0000 0%,
    #ff4d4d 50%,
    #ff0000 100%
  );
  background-size: 600% 600%;
  border-radius: 0.375rem;
  animation: ${animateBorder} 4s ease infinite;
  transition: filter 1s ease-in;
`;

const buttonBgHoverStyle = css`
  filter: blur(10px);
  transition: filter 0.4s ease-in;
`;

export default function ContactUsButton() {
  return (
    <Box css={buttonWrapperStyle} className="button-wrapper">
      <Box css={buttonBgStyle} className="button-bg" />
      <Link href="/contact-us">
        <Button
          fontSize={'sm'}
          fontWeight={600}
          color={'white'}
          bg="transparent"
          position="relative"
          zIndex={1}
          width="100%"
          _hover={{
            bg: 'transparent',
          }}
          _active={{
            bg: 'transparent',
          }}
          borderRadius="md"
        >
          CONTACT US
        </Button>
      </Link>
    </Box>
  );
}
