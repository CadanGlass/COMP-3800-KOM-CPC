import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';

function AccordionInfo({ items }) {
  return (
    <Accordion allowToggle>
      {items.map((item, index) => (
        <AccordionItem key={index}>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                {item.title}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            {item.content.map((contentItem, contentIndex) => (
              <Text key={contentIndex} mb={2}>
                {contentItem}
              </Text>
            ))}
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

AccordionInfo.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};

AccordionInfo.defaultProps = {
  items: [],
};

export default AccordionInfo;
