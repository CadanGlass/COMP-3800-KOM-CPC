import React, { useState } from 'react';
import Slider from 'react-slick';
import { Box, Image, Link, Card } from '@chakra-ui/react';

export default function Carousel({ sponsors }) {
  const [slider, setSlider] = useState(null);

  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <Box position={'relative'} width={'full'}>
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {sponsors.map((sponsor, index) => (
            <Box key={index}>
              <Card
                position="relative"
                transition="transform 0.3s, box-shadow 0.3s"
                _hover={{ transform: 'scale(1.05)', boxShadow: 'xl' }}
                padding={4}
                mx={{ base: 2, md: 8, xl: 16 }}
                bg="white"
                variant="outline"
              >
                <Link
                  href={sponsor.Url}
                  isExternal
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Image
                    src={sponsor.Logo}
                    alt={sponsor.Alt || sponsor.Name}
                    w="100%"
                    maxW="150px"
                    color="black"
                  />
                </Link>
              </Card>
            </Box>
          ))}
        </Slider>
      </Box>
    </>
  );
}
