import { Button } from '@chakra-ui/react';

const LearnMoreButton = ({ onClick, isExpanded }) => {
    return (
        <Button
            onClick={onClick}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'blue.900'}
            border={'1px solid white'}
            _hover={{
                bg: 'blue.500',
                borderColor: 'white',
            }}
        >
            {isExpanded ? 'Collapse' : 'Learn More →'}
        </Button>
    );
};

export default LearnMoreButton;
