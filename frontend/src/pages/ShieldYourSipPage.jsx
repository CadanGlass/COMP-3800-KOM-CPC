import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {
  VStack,
  useColorMode,
  Image,
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  Link,
  Button,
} from '@chakra-ui/react';

import CallPoliceBanner from '../components/home/CallPoliceBanner';
import { Section, DefaultCard } from '../components/DefaultComponents';
import Header from '../components/Header';
import { SysButton, RainbowButton } from '../components/buttons/SysButton';
import SysInfoCard from '../components/sys/SysInfoCard';
import SysSponsorsCard from '../components/sys/SysSponsorsCard';
import VolunteerNowButton from '../components/buttons/VolunteerNowButton';
import Slideshow from '../components/sys/Slideshow';
import TitleBlockDescription from '../components/sys/TitleBlockDescription';

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

  const FirstBtn = VolunteerNowButton({
    label: 'Donate to SYS',
    link: apiData.Header.FirstButton.Link,
  });
  const SecondBtn = VolunteerNowButton({
    label: apiData.Header.SecondButton.ButtonLabel,
    link: apiData.Header.SecondButton.Link,
  });

  const subHeading = Object.keys(apiData.SubHeading)
    .filter((key) => key !== 'id')
    .map((key) => {
      return apiData.SubHeading[key];
    });

  const sponsors = {
    ...apiData.SponsorsAndSupport,
    Sponsor: apiData.SponsorsAndSupport.Sponsor.map((sponsor) => {
      return {
        ...sponsor,
        Logo: `${baseURL}${sponsor.Logo.data.attributes.url}`,
      };
    }),
  };

  const whatToLookOutFor = apiData.WhatToLookOutFor;
  const suspectDrinkSpiking = apiData.SuspectDrinkSpiking;
  const sexualAssault = {
    ...apiData.SexualAssault,
    btnLabel: apiData.SexualAssault.DirectReportingButton.ButtonLabel,
    btnLink: apiData.SexualAssault.DirectReportingButton.Link,
  };
  const supportServices = apiData.SupportServices;

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

        <Section id="sys-info-card">
          {subHeading && <SysInfoCard data={subHeading} />}
        </Section>

        <Section>{sponsors && <SysSponsorsCard data={sponsors} />}</Section>

        <Section>
          <DefaultCard>
            <VStack spacing={4} align={'left'}>
              <Heading as="h2" size="lg">
                What is Drink Spiking?
              </Heading>
              {/* <Slideshow /> */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '0',
                  paddingTop: '56.25%',
                  paddingBottom: '0',
                  boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)',
                  marginTop: '1.6em',
                  marginBottom: '0.9em',
                  overflow: 'hidden',
                  borderRadius: '8px',
                  willChange: 'transform',
                }}
              >
                <iframe
                  loading="lazy"
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    top: '0',
                    left: '0',
                    border: 'none',
                    padding: '0',
                    margin: '0',
                  }}
                  src="https://www.canva.com/design/DAGF9ZWsvQ8/KnxIm9HE6qieeGBr8hUbXQ/view?embed"
                  allowFullScreen
                  allow="fullscreen"
                ></iframe>
              </div>
            </VStack>
          </DefaultCard>
        </Section>

        <Section>
          {whatToLookOutFor && (
            <TitleBlockDescription data={whatToLookOutFor} />
          )}
        </Section>

        <Section>
          {suspectDrinkSpiking && (
            <TitleBlockDescription data={suspectDrinkSpiking} />
          )}
        </Section>

        <Section>
          {sexualAssault && (
            <TitleBlockDescription
              data={sexualAssault}
              btn={SysButton(sexualAssault.btnLabel, sexualAssault.btnLink)}
            />
          )}
        </Section>

        <Section>
          {supportServices && <TitleBlockDescription data={supportServices} />}
        </Section>

        <Section>
          <DefaultCard>
            <VStack spacing={4} align="left">
              <Heading size="md">Support Us</Heading>
              <Stack
                direction={{ base: 'column', md: 'row' }}
                spacing={{ base: 4, md: 8 }}
                justify="center"
              >
                <RainbowButton
                  label="Volunteer with SYS"
                  click={() =>
                    document.getElementById('sys-info-card')?.scrollIntoView()
                  }
                />
                <VolunteerNowButton
                  label="Donate to SYS"
                  link="https://www.canadahelps.org/en/charities/kerrisdale-oakridge-marpole-crime-prevention-society/p2p/shieldyoursip/ "
                />
              </Stack>
            </VStack>
          </DefaultCard>
        </Section>
      </VStack>
    </>
  );
}
