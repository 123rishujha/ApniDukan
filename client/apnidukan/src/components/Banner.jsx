import React from 'react';
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Container,
} from '@chakra-ui/react';
import { ChevronRightIcon ,ChevronLeftIcon} from "@chakra-ui/icons"
// Here we have used react-icons package for the icons

// And react-slick as our Carousel Lib
import Slider from 'react-slick';


// Settings for the slider
const settings = {
   dots: false,
  arrows: true,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Banner() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '50%', md: '50%',lg:'50%' });
  const side = useBreakpointValue({ base: '2%', md: '40px' });

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      
      image:
        'https://m.media-amazon.com/images/I/41bEL9OlxtL._SX1500_.jpg',
    },
    {
      image:
        'https://m.media-amazon.com/images/I/51zph4TROLL._SX3000_.jpg',
    },
    {
     
      image:
        'https://m.media-amazon.com/images/I/71ca5zrqJmL._SX3000_.jpg',
    },
  ];
  return (
    <Box
      position={'relative'}
      height={'auto'}
      min-width={{md:'100%',lg:'100%',base:'100%'}}
      overflow={'hidden'}
      marginBottom={'0px'}
      alignItems={'center'}
      justifyContent={'center'}
      // border={'10px solid red'}
      padding={'0px'}
      // flexShrink={'0.5'}
   >
      {/* CSS files for react-slick */}
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
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        _hover={{variant:'outline'}}
        onClick={() => slider?.slickPrev()}>
       <ChevronLeftIcon size="40px" color='white' boxSize={"70px"}/>
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        _hover={{variant:'outline'}}
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <ChevronRightIcon size="40px" color='white' boxSize={"70px"}/>
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        
        {cards && cards.map((card, index) => (
          
          <Box
          // border={'10px solid green'}
            key={index}
            height={{lg:"300px",md:'200px',base:'150px'}}
            position="relative"
            top='0px'
            // backgroundPosition={{base:"center",md:'none'}}
            padding='0px'
            margin='0px'
            width='100%'
            backgroundSize= {"100% 100%"}
            backgroundRepeat={{md:"no-repeat",base:'no-repeat'}}
            // backgroundSize={{md:"cover",base:'contain'}}
            backgroundImage={`url(${card.image})`}>
            {/* This is the block you need to change, to customize the caption */}
            {/* <Container size="container.lg"  position="relative" > */}
              {/* <Stack
              height="150px"
             border={'10px solid blue'}
                // spacing={6}
                w={'full'}
                maxW={'lg'}
                position="absolute"
                top="50%"
                transform="translate(0, -50%)">
              </Stack> */}
            {/* </Container> */}
          </Box>
        ))}
      </Slider>
    </Box>
  );
}