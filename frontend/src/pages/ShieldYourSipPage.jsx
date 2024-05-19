import React, { useState } from 'react';
import {
  VStack,
  useColorMode,
  Heading,
  Text,
  Image,
  Button,
} from '@chakra-ui/react';
import CallPoliceBanner from '../components/home/CallPoliceBanner';
import {
  Section,
  PageHeading,
  DefaultCard,
} from '../components/DefaultComponents';
import sys_logo from '../assets/sys_logo.png';
import drink_cover from '../assets/drink_cover.png';
import Header from '../components/Header';
import GetYourShieldButton from '../components/buttons/GetYourShieldButton';

export default function ShieldYourSipPage() {
  const { colorMode } = useColorMode();

  return (
    <>
      <VStack
        spacing={14}
        bgGradient={
          colorMode === 'light'
            ? 'linear(yellow.100, red.100, green.100)'
            : 'linear(#1a202c, #2d3748)'
        }
      >
        <CallPoliceBanner />

        <Section align="center">
          <Image
            src={sys_logo}
            alt="Banner"
            fit="cover"
            w={'100%'}
            maxW="700px"
          />
        </Section>

        <Section>
          <Header
            title={'Shield Your Sip'}
            description={
              'Sentence summing up the program like drink spiking protection.'
            }
            btn1={GetYourShieldButton()}
            imageUrl={drink_cover}
          />
        </Section>

        <Section>
          <DefaultCard>asdfasdf</DefaultCard>
        </Section>
      </VStack>
    </>
  );
}
