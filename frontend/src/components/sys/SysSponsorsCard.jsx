import React, { useEffect } from 'react';

import { DefaultCard } from '../DefaultComponents';
import { DotButton, useDotButton } from '../howCanIHelp/EmblaCarouselDotButton';

import {
  Stack,
  Heading,
  Image,
  AspectRatio,
  Link,
} from '@chakra-ui/react';
import useEmblaCarousel from 'embla-carousel-react';

import BCCPALogo from '../../assets/partner_logos_individual/BCCPA_Logo-100x100-1.jpg';
import CrimeStoppersLogo from '../../assets/partner_logos_individual/Crime_Stoppers_BC_Logo-100x100-1.jpg';
import DouglasParkLogo from '../../assets/partner_logos_individual/Douglas_Park_CC_Logo-100x100-1.jpg';
import ECommLogo from '../../assets/partner_logos_individual/E_Comm_911_Logo-100x100-1.jpg';
import HillcrestLogo from '../../assets/partner_logos_individual/Hillcrest_Logo-100x100-1.jpg';

const Sponsors = [
  {
    alternativeText: 'test',
    Url: 'https://google.ca',
    Name: 'BCCPA',
    Logo: BCCPALogo,
  },
  {
    Alt: 'test',
    Url: 'https://google.ca',
    Name: 'Crime Stoppers',
    Logo: CrimeStoppersLogo,
  },
  {
    Alt: 'test',
    Url: 'https://google.ca',
    Name: 'Douglas Park',
    Logo: DouglasParkLogo,
  },
  {
    Alt: 'test',
    Url: 'https://google.ca',
    Name: 'E-Comm 911',
    Logo: ECommLogo,
  },
  {
    Alt: 'test',
    Url: 'https://google.ca',
    Name: 'Hillcrest',
    Logo: HillcrestLogo,
  },
];

const Sponsor = ({ data }) => {
  return (
    <>
      <Link href={data.Url} isExternal>
        <AspectRatio ratio={1} w="100px" h="100px">
          <Image src={data.Logo} alt={data.Name} />
        </AspectRatio>
      </Link>
    </>
  );
};

export default function SysSponsorsCard({ data }) {
  const [embelaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  useEffect(() => {
    if (!emblaApi) return;

    const autoScroll = () => {
      if (emblaApi) {
        emblaApi.scrollNext();
      }
    };
    const interval = setInterval(autoScroll, 3000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <DefaultCard>
      <Stack spacing={4}>
        <Heading as="h3" size="lg" pb={8}>
          {data.Title}
        </Heading>
        <section className="embla">
          <div ref={embelaRef} className="embla__viewport">
            <div className="embla__container">
              {Sponsors.map((sponsor, index) => (
                <div className="embla__slide" key={index}>
                  <Sponsor data={sponsor} />
                </div>
              ))}
            </div>
          </div>
          <div className="embla__dots">
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={'embla__dot'.concat(
                  index === selectedIndex ? ' embla__dot--selected' : ''
                )}
              />
            ))}
          </div>
        </section>
      </Stack>
    </DefaultCard>
  );
}
