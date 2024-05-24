import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import './DonateButton.css';

export default function DonateButton({
  label = 'Donate',
  link = 'https://www.canadahelps.org/en/dn/81226',
}) {
  return (
    <Link
      className="button-wrapper"
      to={link}
      target="_blank"
      rel="noopener noreferrer"
      style={{ width: '120px' }} // Set a fixed width
    >
      <Button
        className="btn"
        fontSize={'sm'}
        fontWeight={600}
        color={'white'}
        bg={'black'}
        _hover={{
          color: 'white',
        }}
        width="full" // Ensure button takes the full width of its container
      >
        {label.toUpperCase()}
      </Button>
      <div className="button-bg"></div>
    </Link>
  );
}
