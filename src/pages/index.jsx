import * as React from 'react';
import Header from '../components/header';
import Artist from '../components/artist';
import Hero from '../components/hero';
import ArtistWork from '../components/artistWork';
import Footer from "../components/footer"
import '../components/layout.css';
import { Search, Bell } from 'react-feather';

const Profile = () => (
  <div position='relative'>
    <img src='images/profile.png' w='38' position='relative' alt='profile' />
    <div
      w='6px'
      h='6px'
      bg='online'
      borderRadius='50%'
      position='absolute'
      top='36px'
      ml='16px'
    />
  </div>
);

const headerMenu = [
  {
    title: 'explore',
    href: '#',
  },
  {
    title: 'drops',
    href: '#',
  },
  {
    title: 'artists',
    href: '#',
  },
  {
    title: <Search size='18' />,
    href: '#',
  },
  {
    title: <Bell size='18' fill='#000' />,
    href: '#',
  },
  {
    title: 'create',
    href: '#',
  },
  {
    title: <Profile />,
    href: '#',
  },
];

export default function MainPage() {
  return (
    <>
      <Header
        minH='0'
        branding={{
          name: 'Jumy',
        }}
        links={headerMenu}
      />
      
      <Hero
        heading='RESTING REFUGE'
        subheading='Edition 1 of 1'
        text={<>
          <div fontFamily='AvertaDemo-EBI'>About the Artwork</div>
          <p fontFamily='AvertaDemo' lineHeight='1' mt='2' mb='8'>Resting refuge translates the symbiotic relationship between colors and nature. </p>
          
          <div fontFamily='AvertaDemo-EBI'>About the Artist</div>
          <p fontFamily='AvertaDemo'  lineHeight='1' mt='2' mb='5'>Jumaker is a contemporary digital Artist with a unique signature and very authentic genre.</p>
        </>}
        image={{
          src: 'images/placeholder.png',
          alt: 'Hero image',
        }}
        bids={<div display='grid' col='1|1|2' gap='4' mt='2.6rem'>
          <div display='flex' flexDirection='column' gap='4'>
            <div fontFamily='AvertaDemo-EBI' fontSize='15px' lineHeight='18px'>Current bid</div>
            <div fontSize='4mxl' mt='4' className='ETH'>3.50 ETH</div>
            <div fontFamily='TradeGothic' fontWeight='bold'>$ 12 782 </div>
          </div>
          <div display='flex' flexDirection='column' gap='4'>
            <div fontFamily='AvertaDemo-EBI'>Auction ending in</div>
            <div fontSize='4mxl' mt='4' display='grid' col='3' className='auction-ending-content'>
              <div>19</div>
              <div>23</div>
              <div>54</div>
            </div>
            <div display='grid' col='38px 135px 48px' fontFamily='TradeGothic' fontWeight='bold' textAlign='center'>
              <div>hr</div>
              <div>mins</div>
              <div>sec</div>
            </div>
          </div>
        </div>}
        buttons={
          <div display='grid' col='2' gap='4' mt='2.6rem'>
            <a variant='button.muted' href='#' h='50'>
              Bid with ETH
            </a>
            <a variant='button.muted' href='#' h='50'>
              Bid with card
            </a>
          </div>
        }
      />

      <Artist />
      <ArtistWork />
      <Footer />
    </>
  );
}
