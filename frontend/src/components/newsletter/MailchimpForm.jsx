import React, { useState } from 'react';
import { Box, Input, Button, Heading, VStack } from '@chakra-ui/react';

const MailchimpForm = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <VStack spacing={1} align="center">
      <Heading as="h5" textAlign="center" size="md">
    Subscribe
      </Heading>
      <link
        href="//cdn-images.mailchimp.com/embedcode/classic-061523.css"
        rel="stylesheet"
        type="text/css"
      />
      <div id="mc_embed_signup">
        <form
          action="https://komcpc.us1.list-manage.com/subscribe/post?u=df676da1af2d845814cbf381e&amp;id=c09a90203c&amp;f_id=008f17e5f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
          noValidate
        >
          <div id="mc_embed_signup_scroll">
            <VStack spacing={3} align="center">
              <Input
                type="email"
                name="EMAIL"
                className="required email"
                id="mce-EMAIL"
                required
                value={email}
                onChange={handleEmailChange}
                placeholder="* Enter email address"
                size="md"
                width="300px"
                padding="10px"
              />
              <Button
                type="submit"
                id="mc-embedded-subscribe"
                bg={'red.600'}
                color={'white'}
                fontWeight={600}
                _hover={{ bg: 'red.400' }}
                size="md"
              >
                Subscribe
              </Button>
            </VStack>
          </div>
        </form>
      </div>
    </VStack>
  );
};

export default MailchimpForm;
