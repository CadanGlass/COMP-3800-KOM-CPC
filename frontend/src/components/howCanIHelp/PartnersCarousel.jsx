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

const PartnersCarousel = ({ options }) => {
  const logos = [
    { name: 'BCCPA', src: BCCPALogo },
    { name: 'Crime Stoppers', src: CrimeStoppersLogo },
    { name: 'Douglas Park', src: DouglasParkLogo },
    { name: 'E-Comm 911', src: ECommLogo },
    { name: 'Hillcrest', src: HillcrestLogo },
    { name: 'ICBC', src: ICBCLogo },
    { name: 'JCC', src: JCCLogo },
    { name: 'KCC', src: KCCLogo },
    { name: 'KEM', src: KEMLogo },
    { name: 'Langara', src: LangaraLogo },
    { name: 'LKEL', src: LKELLogo },
    { name: 'MNH', src: MNHLogo },
    { name: 'MOCC', src: MOCCLogo },
    { name: 'MOFP', src: MOFPLogo },
    { name: 'PNE', src: PNELogo },
    { name: 'Science World', src: ScienceWorldLogo },
    { name: 'Total VSB', src: TotalVSBLogo },
    { name: 'Transit Police', src: TransitPoliceLogo },
    { name: 'Translink', src: TranslinkLogo },
    { name: 'City of Vancouver', src: VancouverLogo },
    { name: 'VPD', src: VPDLogo },
  ];

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
          {logos.map((logo, index) => (
            <div className="embla__slide" key={index}>
              <PartnerCard name={logo.name} image={logo.src} />
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
