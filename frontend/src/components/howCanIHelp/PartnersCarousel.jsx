import React, { useEffect } from 'react';
import './Embla.css'; // Import the CSS file

import { DotButton, useDotButton } from './EmblaCarouselDotButton';
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from './EmblaCarouselArrowButtons';
import useEmblaCarousel from 'embla-carousel-react';
import PartnerCard from './PartnerCard';

// Importing individual partner logos
import BCCPALogo from '../../assets/partner_logos_individual/BCCPA_Logo-100x100-1.jpg';
import CrimeStoppersLogo from '../../assets/partner_logos_individual/Crime_Stoppers_BC_Logo-100x100-1.jpg';
import DouglasParkLogo from '../../assets/partner_logos_individual/Douglas_Park_CC_Logo-100x100-1.jpg';
import ECommLogo from '../../assets/partner_logos_individual/E_Comm_911_Logo-100x100-1.jpg';
import HillcrestLogo from '../../assets/partner_logos_individual/Hillcrest_Logo-100x100-1.jpg';
import ICBCLogo from '../../assets/partner_logos_individual/ICBC_Logo-100x100-1.jpg';
import JCCLogo from '../../assets/partner_logos_individual/JCC_Logo-100x100-1.jpg';
import KCCLogo from '../../assets/partner_logos_individual/KCC_Logo-100x100-1.jpg';
import KEMLogo from '../../assets/partner_logos_individual/KEM_Logo-100x100-1.jpg';
import LangaraLogo from '../../assets/partner_logos_individual/Langara_Logo-100x100-1.jpg';
import LKELLogo from '../../assets/partner_logos_individual/LKE_Logo-100x100-1.jpg';
import MNHLogo from '../../assets/partner_logos_individual/MNH_Logo-100x100-1.jpg';
import MOCCLogo from '../../assets/partner_logos_individual/MOCC_Logo-100x100-1.jpg';
import MOFPLogo from '../../assets/partner_logos_individual/MOFP_Logo-100x100-1.jpg';
import PNELogo from '../../assets/partner_logos_individual/PNE_Logo-100x100-1.jpg';
import ScienceWorldLogo from '../../assets/partner_logos_individual/Science_World_Logo-100x100-1.jpg';
import TotalVSBLogo from '../../assets/partner_logos_individual/Total_VSB_Logo-100x100-1.jpg';
import TransitPoliceLogo from '../../assets/partner_logos_individual/Transit_Police_Logo-100x100-1.jpg';
import TranslinkLogo from '../../assets/partner_logos_individual/Translink_Logo-100x100-1.jpg';
import VancouverLogo from '../../assets/partner_logos_individual/Vancouver_Logo-100x100-1.jpg';
import VPDLogo from '../../assets/partner_logos_individual/VPD_Logo-1-100x100-1.jpg';

const PartnersCarousel = ({ sponsors = [], options = null }) => {
  let sponsorsArr = [];
  if (sponsors.length === 0) {
    sponsorsArr = [
      {
        alternativeText: 'test',
        url: 'https://google.ca',
        name: 'BCCPA',
        logo: BCCPALogo,
      },
      {
        alternativeText: 'test',
        url: 'https://google.ca',
        name: 'Crime Stoppers',
        logo: CrimeStoppersLogo,
      },
      {
        alternativeText: 'test',
        url: 'https://google.ca',
        name: 'Douglas Park',
        logo: DouglasParkLogo,
      },
      {
        alternativeText: 'test',
        url: 'https://google.ca',
        name: 'E-Comm 911',
        logo: ECommLogo,
      },
      {
        alternativeText: 'test',
        url: 'https://google.ca',
        name: 'Hillcrest',
        logo: HillcrestLogo,
      },
      {
        alternativeText: 'test',
        url: 'https://google.ca',
        name: 'ICBC',
        logo: ICBCLogo,
      },
      {
        alternativeText: 'test',
        url: 'https://google.ca',
        name: 'JCC',
        logo: JCCLogo,
      },
      {
        alternativeText: 'test',
        url: 'https://google.ca',
        name: 'KCC',
        logo: KCCLogo,
      },
      {
        alternativeText: 'test',
        url: 'https://google.ca',
        name: 'KEM',
        logo: KEMLogo,
      },
      {
        alternativeText: 'test',
        url: 'https://google.ca',
        name: 'Langara',
        logo: LangaraLogo,
      },
      {
        alternativeText: 'test',
        url: 'https://google.ca',
        name: 'LKEL',
        logo: LKELLogo,
      },
      {
        alternativeText: 'test',
        url: 'https://google.ca',
        name: 'MNH',
        logo: MNHLogo,
      },
      {
        alternativeText: 'test',
        url: 'https://google.ca',
        name: 'MOCC',
        logo: MOCCLogo,
      },
      {
        alternativeText: 'test',
        url: 'https://google.ca',
        name: 'MOFP',
        logo: MOFPLogo,
      },
      {
        alternativeText: 'test',
        url: 'https://google.ca',
        name: 'PNE',
        logo: PNELogo,
      },
      {
        alternativeText: 'test',
        url: 'https://google.ca',
        name: 'Science World',
        logo: ScienceWorldLogo,
      },
      {
        alternativeText: 'test',
        url: 'https://google.ca',
        name: 'Total VSB',
        logo: TotalVSBLogo,
      },
      {
        alternativeText: 'test',
        url: 'https://google.ca',
        name: 'Transit Police',
        logo: TransitPoliceLogo,
      },
      {
        alternativeText: 'test',
        url: 'https://google.ca',
        name: 'Translink',
        logo: TranslinkLogo,
      },
      {
        alternativeText: 'test',
        url: 'https://google.ca',
        name: 'City of Vancouver',
        logo: VancouverLogo,
      },
      {
        alternativeText: 'test',
        url: 'https://google.ca',
        name: 'VPD',
        logo: VPDLogo,
      },
    ];
  } else {
    sponsorsArr = sponsors;
  }

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
  });

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  useEffect(() => {
    if (!emblaApi) return;

    const autoScroll = () => {
      if (emblaApi) {
        emblaApi.scrollNext();
      }
    };
    const interval = setInterval(autoScroll, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [emblaApi]);
  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {sponsorsArr.map((sponsor, index) => (
            <div className="embla__slide" key={index}>
              <PartnerCard data={sponsor} />
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
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
  );
};

export default PartnersCarousel;
