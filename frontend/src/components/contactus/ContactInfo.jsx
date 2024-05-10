import { Text, HStack, Icon } from '@chakra-ui/react';
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdAccessTimeFilled,
} from 'react-icons/md';

export default function ContactInfo({ phone, email, address, hours }) {
  return (
    <>
      <HStack spacing={4}>
        <Icon as={MdPhone} color={'gray.500'} />
        <Text>{phone}</Text>
      </HStack>
      <HStack spacing={4}>
        <Icon as={MdEmail} color={'gray.500'} />
        <Text>{email}</Text>
      </HStack>
      <HStack spacing={4}>
        <Icon as={MdLocationOn} color={'gray.500'} />
        <Text>{address}</Text>
      </HStack>
      <HStack spacing={4}>
        <Icon as={MdAccessTimeFilled} color={'gray.500'} />
        <Text>{hours}</Text>
      </HStack>
    </>
  );
}
