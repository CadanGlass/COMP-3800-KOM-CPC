// components/newsletter/MailchimpForm.jsx
import React, { useState } from 'react';
import { Box, Input, Heading, VStack, Button } from '@chakra-ui/react';

const MailchimpForm = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <VStack spacing={1} align="center">
      <Heading as="h5" textAlign="center" size="sm">
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
                fontSize={'sm'}
                fontWeight={600}
                color={'white'}
                bgGradient="linear(to-r, red.500, red.700)"
                _hover={{
                  bgGradient: 'linear(to-r, red.600, red.800)',
                  transform: 'scale(1.05)',
                }}
                _active={{
                  bgGradient: 'linear(to-r, red.700, red.900)',
                }}
                borderRadius="md"
                boxShadow="lg"
                transition="all 0.2s ease-in-out"
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
