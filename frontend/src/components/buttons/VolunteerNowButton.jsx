// components/VolunteerNowButton.jsx
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
    #ff8038 0%,
    #ff0099 30.43%,
    #00ebeb 68.23%,
    #db00ff 100%
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

export default function VolunteerNowButton({
  label = 'Volunteer Now',
  link = 'https://app.betterimpact.com/PublicOrganization/9751335d-c792-494f-83e0-f504c28ed30c/1',
}) {
  return (
    <Box css={buttonWrapperStyle} className="button-wrapper">
      <Box css={buttonBgStyle} className="button-bg" />
      <Link href={link} isExternal>
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
          {label.toUpperCase()}
        </Button>
      </Link>
    </Box>
  );
}
