import { Button } from '@chakra-ui/react';

const LearnMoreButton = ({ onClick, isExpanded }) => {
    return (
        <Button
            onClick={onClick}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'blue.800'}
            _hover={{
                bg: 'blue.500',
            }}
        >
            {isExpanded ? 'Collapse' : 'Learn More'}
        </Button>
    );
};

export default LearnMoreButton;
