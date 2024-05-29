import { Button, Box } from '@chakra-ui/react';
import { css, keyframes } from '@emotion/react';

// Define the keyframes for the border animation
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

// Define the wrapper style for the button
const buttonWrapperStyle = css`
  position: relative;
  padding: 4px;
`;

// Define the background style for the button
const buttonBgStyle = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    #3182ce 0%,
    #2b6cb0 50%,
    #3182ce 100%
  );
  background-size: 600% 600%;
  border-radius: 0.375rem;
  animation: ${animateBorder} 4s ease infinite;
  transition: filter 1s ease-in;
`;

// Define the hover effect for the background
const buttonBgHoverStyle = css`
  filter: blur(10px);
  transition: filter 0.4s ease-in;
`;

const LearnMoreButton = ({ onClick, isExpanded }) => {
  return (
    <Box css={buttonWrapperStyle} className="button-wrapper">
      <Box css={buttonBgStyle} className="button-bg" />
      <Button
        onClick={onClick}
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
        {isExpanded ? 'Collapse' : 'Learn More →'}
      </Button>
    </Box>
  );
};

export default LearnMoreButton;
