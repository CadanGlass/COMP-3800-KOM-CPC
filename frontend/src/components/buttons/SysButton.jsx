import './SysButton.css';
import { Button, Link, Box } from '@chakra-ui/react';
import { css, keyframes } from '@emotion/react';

const SysButton = (label, link) => {
  return (
    <Link to={link} isExternal>
      <button className="sys-btn">
        <span>{label}</span>
      </button>
    </Link>
  );
};

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

const btn = (label, click) => {
  return (
    <Button
      fontSize={'sm'}
      fontWeight={600}
      color={'white'}
      position="relative"
      zIndex={1}
      width="100%"
      bg="transparent"
      _hover={{ bg: 'transparent' }}
      _active={{ bg: 'transparent' }}
      borderRadius="md"
      {...(click ? { onClick: click } : {})}
    >
      {label.toUpperCase()}
    </Button>
  );
};

const RainbowButton = ({ label, link, click = () => {} }) => {
  return (
    <Box css={buttonWrapperStyle} className="button-wrapper">
      <Box css={buttonBgStyle} className="button-bg" />
      {link ? (
        <Link href={link} isExternal>
          {btn(label)}
        </Link>
      ) : (
        btn(label, click)
      )}
    </Box>
  );
};

export { SysButton, RainbowButton };
