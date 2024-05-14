import { Text, HStack, Icon, useColorModeValue } from '@chakra-ui/react';
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdAccessTimeFilled,
} from 'react-icons/md';

export default function ContactInfo({ phone, email, address, hours }) {
  const color = useColorModeValue('gray.500', 'white');

  return (
    <>
      <HStack spacing={4}>
        <Icon as={MdPhone} color={color} />
        <Text>{phone}</Text>
      </HStack>
      <HStack spacing={4}>
        <Icon as={MdEmail} color={color} />
        <Text>{email}</Text>
      </HStack>
      <HStack spacing={4}>
        <Icon as={MdLocationOn} color={color} />
        <Text>{address}</Text>
      </HStack>
      <HStack spacing={4}>
        <Icon as={MdAccessTimeFilled} color={color} />
        <Text>{hours}</Text>
      </HStack>
    </>
  );
}
