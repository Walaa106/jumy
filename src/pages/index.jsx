import * as React from 'react';
import Header from '../components/header';
import Hero from '../components/hero';
import '../components/layout.css';
import { Search, Bell } from 'react-feather';

const Profile = () => (
  <div position='relative'>
    <img src='images/profile.png' w='38' position='relative' />
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
    title: <Bell size='18' />,
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
          <p fontFamily='AvertaDemo' lineHeigh='1' mt='2' mb='5'>Resting refuge translates the symbiotic relationship between colors and nature. </p>
          
          <div fontFamily='AvertaDemo-EBI'>About the Artist</div>
          <p fontFamily='AvertaDemo'  lineHeigh='1' mt='2' mb='5'>Jumaker is a contemporary digital Artist with a unique signature and very authentic genre.</p>
        </>}
        image={{
          src: 'images/placeholder.png',
          alt: 'Hero image'
        }}
        buttons={
          <div display='grid' col='2' gap='4' mt='4'>
            <a variant='button.muted' href='#' h='50'>
              Bid with ETH
            </a>
            <a variant='button.muted' href='#' h='50'>
              Bid with card
            </a>
          </div>
        }
      />
    </>
  );
}
