import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {
  VStack,
  useColorMode,
  Image,
  Box,
  HStack,
  Heading,
  Text,
  Link,
  Button,
} from '@chakra-ui/react';

import CallPoliceBanner from '../components/home/CallPoliceBanner';
import { Section, DefaultCard } from '../components/DefaultComponents';
import Header from '../components/Header';
import SysButton from '../components/buttons/SysButton';
import SysInfoCard from '../components/sys/SysInfoCard';
import SysAwarenessCard from '../components/sys/SysAwarenessCard';
import SysSponsorsCard from '../components/sys/SysSponsorsCard';

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

  const [apiData, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      axios
        .get(url)
        .then((res) => {
          if (!res.data) {
            throw new Error('Failed to fetch data');
          }
          const apiData = res.data.data.attributes;
          setData(apiData);
          setError(null);
          setLoading(false);
        })
        .catch((err) => {
          setError(err);
          setLoading(false);
        });
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  const headerInfo = apiData.Header.HeaderInfo;
  const logo = `${baseURL}${apiData.Logo.data.attributes.url}`;
  const header_image = `${baseURL}${headerInfo.Image.data.attributes.url}`;

  const FirstBtn = SysButton('Donate to SYS', apiData.Header.FirstButton.Link);
  const SecondBtn = SysButton(
    apiData.Header.SecondButton.ButtonLabel,
    apiData.Header.SecondButton.Link
  );

  const subHeading = Object.keys(apiData.SubHeading)
    .filter((key) => key !== 'id')
    .map((key) => {
      return apiData.SubHeading[key];
    });

  const sponsors = {
    ...apiData.SponsorsAndSupport,
    Sponsor: apiData.SponsorsAndSupport.Sponsor.map((sponsor) => {
      return {
        name: sponsor.Name,
        url: sponsor.Url,
        logo: `${baseURL}${sponsor.Logo.data.attributes.url}`,
        alternativeText: sponsor.Logo.data.attributes.alternativeText,
      };
    }),
  };
  console.log(apiData);

  const d =
    '- Alert a trusted person such as a friend, venue staff or host what is happening. \n- Go a safe place - have a trusted person with you. \n- Keep a close eye on anyone who has had their drink spiked. \n- Call an ambulance if their condition deteriorates in any way (for example, if they lose consciousness). \n- Go to your nearest hospital Emergency Room and ask for testing (drug spiking can be with a variety of both legal and illegal drugs NOT just GHB) \n- Contact police as soon as possible after a suspected incident of drink spiking.';

  return (
    <>
      <VStack
        spacing={4}
        bgGradient={
          colorMode === 'light'
            ? 'linear(yellow.100, red.100, green.100)'
            : 'linear(purple.500, purple.700)'
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
              btn1={FirstBtn}
              btn2={SecondBtn}
              imageUrl={header_image}
            />
          )}
        </Section>

        <Section>{subHeading && <SysInfoCard data={subHeading} />}</Section>

        <Section>{sponsors && <SysSponsorsCard data={sponsors} />}</Section>

        {/* <Section>
          <SysAwarenessCard data={data.awareness} />
        </Section> */}

        <Section>
          <DefaultCard>
            <VStack spacing={4} align={'left'}>
              <Heading as="h2" size="lg">
                What is Drink Spiking?
              </Heading>
              <Text>*slideshow*</Text>
            </VStack>
          </DefaultCard>
        </Section>

        <Section>
          <DefaultCard>
            <VStack spacing={4} align={'left'}>
              <Heading as="h2" size="lg">
                What to look out for?
              </Heading>
              <Text>
                Drink spiking symptoms may include: • feeling drunk, woozy or
                drowsy • feeling “out of it” or drunker than expected • mental
                confusion • speech difficulties (such as slurring) • memory loss
                • loss of inhibitions • nausea and vomiting • breathing problems
                • muscle spasms or seizures • loss of consciousness • an
                unusually long hangover • a severe hangover when you had little
                or no alcohol to drink
              </Text>
            </VStack>
          </DefaultCard>
        </Section>

        <Section>
          <DefaultCard>
            <VStack spacing={4} align={'left'}>
              <Heading as="h2" size="lg">
                What to do if you suspect drink spiking?
              </Heading>
              <Text whiteSpace="pre-line">{d}</Text>
            </VStack>
          </DefaultCard>
        </Section>

        <Section>
          <DefaultCard>
            <VStack spacing={4} align={'left'}>
              <Heading as="h2" size="lg">
                Sexual assault from drink spiking
              </Heading>
              <Text>
                WE WOULD ENCOURAGE ALL VICTIMS TO GO TO THEIR NEAREST HOSPITAL
                FOR A CHECKUP WITHIN 48 HOURS. PLEASE NOTE MEMORY LOSS IS COMMON
                WITH DRINK-SPIKING AND TO DO SO EVEN IF IN DOUBT.
              </Text>
              <Text>
                ALL REPORTING IS VOLUNTARY AND IS NOT REQUIRED FOR SUPPORT
                SERVICES. A VICTIM HAS THE OPTION OF DIRECT REPORTING AND
                THIRD-PARTY REPORTING.
              </Text>
              <Link
                href="https://vpd.ca/crime-prevention-safety/drug-assisted-sex-assault/"
                isExternal
              >
                <Button>Direct Reporting</Button>
              </Link>
            </VStack>
          </DefaultCard>
        </Section>

        <Section>
          <DefaultCard>
            <VStack spacing={4} align={'left'}>
              <Heading as="h2" size="lg">
                Support Services & Third-Party Reporting
              </Heading>
              <Text>
                Third-party reporting allows victims to make anonymous reports
                to community-based victim services.
              </Text>
              <Text>
                <Link
                  color="teal.500"
                  href="https://www.salalsvsc.ca/"
                  isExternal
                >
                  SALAL
                </Link>{' '}
                provides support through each step of the journey
              </Text>
              <Text>
                <Link
                  color="teal.500"
                  href="https://endingviolence.org/prevention-programs/ccws-program/third-party-reporting-tpr/"
                  isExternal
                >
                  Ending Violence Associaion of B.C.
                </Link>{' '}
                provides information sheets about third party reporting and
                community-based and police-based programs.
              </Text>
              <Text>
                <Link color="teal.500" href="Victimsinfo.ca" isExternal>
                  Victimsinfo.ca
                </Link>{' '}
                provides information about reporting sexual or domestic assault.
                This website also provides information and support to victims
                and witnesses of crime
              </Text>
              <Text>
                <Link
                  color="teal.500"
                  href="https://www2.gov.bc.ca/gov/content/justice/criminal-justice/victims-of-crime/victimlinkbc"
                  isExternal
                >
                  VictimLinkBC{' '}
                </Link>{' '}
                - 24 hour information and referral to a local victim service
                program.
              </Text>
              <Text>
                <Link
                  color="teal.500"
                  href="https://www2.gov.bc.ca/gov/content/justice/criminal-justice/bcs-criminal-justice-system/if-you-are-a-victim-of-a-crime"
                  isExternal
                >
                  Victim Services in B.C. - Ministry of Justice
                </Link>{' '}
                provides information about all victim services programs offered
                throughout B.C. This website will help you find community-based
                and police-based programs in your area.
              </Text>
            </VStack>
          </DefaultCard>
        </Section>

        <Section>
          <DefaultCard>
            <VStack spacing={4} align="left">
              <Heading size="md">Support Us</Heading>
              <HStack
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
                justify="center"
              >
                <Button>Volunteer with Shield Your Sip</Button>
                <Button>Donate</Button>
                {/* <DonateButton />
                <ContactUsButton /> */}
              </HStack>
            </VStack>
          </DefaultCard>
        </Section>
      </VStack>
    </>
  );
}
