import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
} from '@chakra-ui/react';
import { DefaultBlocksRenderer } from './DefaultComponents';

const CustomAccordion = ({ accordionData: data = [] }) => {
  if (!data.length) {
    return <Text>No data to display</Text>;
  }

  return (
    <Accordion allowMultiple>
      {data.map((item, index) => (
        <AccordionItem key={index} paddingY={4}>
          <h2>
            <AccordionButton p={'4px 4px 4px 0px'}>
              <Box flex={1} textAlign="left">
                <Text as="b"> {item.Title} </Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} pl={0}>
            <DefaultBlocksRenderer content={item.Description} />
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default CustomAccordion;
