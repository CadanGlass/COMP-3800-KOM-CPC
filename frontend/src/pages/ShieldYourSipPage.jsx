import React, { useState, useEffect } from 'react';
import { VStack, useColorMode, Image } from '@chakra-ui/react';
import CallPoliceBanner from '../components/home/CallPoliceBanner';
import { Section } from '../components/DefaultComponents';
import Header from '../components/Header';
import SysButton from '../components/buttons/SysButton';
import SysInfoCard from '../components/sys/SysInfoCard';
import SysAwarenessCard from '../components/sys/SysAwarenessCard';

const data = {
  header: {
    title: 'Shield Your Sip',
    description:
      'Shield Your Sip is a campaign to raise awareness about drink spiking and provide resources to help prevent it.',
    firstButton: {
      title: 'Get Your Shield',
      link: 'https://www.canadahelps.org/en/dn/81226',
    },
    secondButton: {
      title: 'VPD Resources',
      link: 'https://vpd.ca/crime-prevention-safety/drug-assisted-sex-assault/',
    },
  },
  subPoints: [
    {
      Title: 'What is #ShieldYourSip?',
      Description: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, eleifend dolor. Nullam sit amet scelerisque nunc',
      ],
    },
    {
      Title: 'The SYS Team!',
      Description: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, eleifend dolor. Nullam sit amet scelerisque nunc',
      ],
    },
    {
      Title: 'SYS Survey',
      Description: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, eleifend dolor. Nullam sit amet scelerisque nunc',
      ],
    },
  ],
  awareness: {
    title: 'Drink Spiking Awareness',
    questions: [
      {
        title: 'What is Drink Spiking?',
        description: [
          'Drink spiking is when someone adds alcohol or drugs to your drink without you knowing. It can happen to anyone, anywhere, and at any time. Drink spiking is illegal and can have serious consequences.',
        ],
      },
      {
        title: 'What to Look Out For?',
        description: [
          'If you think you have been spiked, you may feel drunk even if you have not drunk any alcohol. You may feel dizzy, drowsy, or have memory loss. You may also feel sick, have difficulty speaking, or feel confused. If you think you have been spiked, you should seek help immediately.',
        ],
      },
      {
        title: 'I think I / My Friend Have Been Spiked?',
        description: [
          'If you think you or a friend have been spiked, you should seek help immediately. You should go to a safe place, tell someone you trust, and seek medical help. You should also report the incident to the police.',
        ],
      },
      {
        title: 'The Drugs and Reports',
        description: [
          'Common drugs used in drink spiking include GHB, ketamine, and Rohypnol. If you think you have been spiked, you should report the incident to the police. You should also seek medical help.',
        ],
      },
    ],
  },
};

const baseURL = 'http://localhost:1337';

export default function ShieldYourSipPage() {
  const { colorMode } = useColorMode();
  const url = `${baseURL}/api/shield-your-sip-page`;

  const [d, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const json = await response.json();
        setData(json);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  const apiData = d.data.attributes;
  const headerInfo = apiData.Header.HeaderInfo;
  const logo = `${baseURL}${apiData.Logo.data.attributes.url}`;
  const header_image = `${baseURL}${headerInfo.Image.data.attributes.url}`;

  const GetYourShieldBtn = SysButton(
    apiData.Header.FirstButton.ButtonLabel,
    apiData.Header.FirstButton.Link
  );
  const VpdResourcesBtn = SysButton(
    apiData.Header.SecondButton.ButtonLabel,
    apiData.Header.SecondButton.Link
  );

  const subHeading = Object.keys(apiData.SubHeading)
    .filter((key) => key !== 'id')
    .map((key) => {
      return apiData.SubHeading[key];
    });

  return (
    <>
      <VStack
        spacing={4}
        bgGradient={
          colorMode === 'light'
            ? 'linear(yellow.100, red.100, green.100)'
            : 'linear(#1a202c, #2d3748)'
        }
      >
        <CallPoliceBanner />

        <Section align="center">
          {logo && (
            <Image src={logo} alt="Logo" fit="cover" w={'100%'} maxW="700px" />
          )}
        </Section>

        <Section>
          {headerInfo && header_image && (
            <Header
              title={headerInfo.Title}
              description={headerInfo.Description}
              btn1={GetYourShieldBtn}
              btn2={VpdResourcesBtn}
              imageUrl={header_image}
            />
          )}
        </Section>

        <Section>{subHeading && <SysInfoCard data={subHeading} />}</Section>

        <Section>
          <SysAwarenessCard data={data.awareness} />
          {/* TODO: use data from response after AccordionMenu component has been refactored */}
        </Section>
      </VStack>
    </>
  );
}
