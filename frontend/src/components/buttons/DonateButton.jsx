import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import './DonateButton.css';

export default function DonateButton() {
  return (
    <Link
      className="button-wrapper"
      to="https://www.canadahelps.org/en/dn/81226"
      target="_blank"
      rel="noopener noreferrer"
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
      >
        Donate
      </Button>
      <div className="button-bg"></div>
    </Link>
  );
}
