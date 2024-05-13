import { Button } from '@chakra-ui/react';

export default function LearnMoreButton() {
    return (
        <Button
            as={Button}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'teal.500'}
            href={'#'}
            _hover={{
                bg: 'teal.300',
            }}
        >
            Learn More
        </Button>
    );
}
