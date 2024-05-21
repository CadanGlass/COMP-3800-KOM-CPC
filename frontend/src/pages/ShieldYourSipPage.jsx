import { VStack, useColorMode, Image } from '@chakra-ui/react';
import CallPoliceBanner from '../components/home/CallPoliceBanner';
import { Section } from '../components/DefaultComponents';
import sys_logo from '../assets/sys_logo.png';
import drink_cover from '../assets/drink_cover.png';
import Header from '../components/Header';
import SysButton from '../components/buttons/SysButton';
import SysInfoCard from '../components/sys/SysInfoCard';

const data = {
  subPoints: [
    {
      title: 'What is #ShieldYourSip?',
      description: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, eleifend dolor. Nullam sit amet scelerisque nunc',
      ],
    },
    {
      title: 'The SYS Team!',
      description: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, eleifend dolor. Nullam sit amet scelerisque nunc',
      ],
    },
    {
      title: 'SYS Survey',
      description: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, eleifend dolor. Nullam sit amet scelerisque nunc',
      ],
    },
  ],
};

export default function ShieldYourSipPage() {
  const { colorMode } = useColorMode();
  const GetYourShieldBtn = SysButton(
    'Get Your Shield',
    'https://www.canadahelps.org/en/dn/81226'
  );
  const VpdResourcesBtn = SysButton(
    'VPD Resources',
    'https://vpd.ca/crime-prevention-safety/drug-assisted-sex-assault/'
  );

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
            btn1={GetYourShieldBtn}
            btn2={VpdResourcesBtn}
            imageUrl={drink_cover}
          />
        </Section>

        <Section>
          <SysInfoCard data={data} />
        </Section>
      </VStack>
    </>
  );
}
