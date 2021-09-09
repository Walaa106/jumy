import * as React from "react"
import Block from "../components/header"
import '../components/layout.css'
import { Search, Bell } from 'react-feather'

const Profile = () => {
  return <div position='relative'>
    <img src='images/profile.png' w='38' position='relative' />
    <div w='6px' h='6px' bg='#00FF94' borderRadius='50%' position='absolute' top='36px' ml='16px' />
  </div>
}

export default function Example() {
  return (
    <Block
      minH="500|0"
      branding={{
        name: "Jumy",
      }}
      links={[
        {
          title: "explore",
          href: "#",
        },
        {
          title: "drops",
          href: "#",
        },
        {
          title: "artists",
          href: "#",
        },
        {
          title: <Search />,
          href: "#",
        },
        {
          title: <Bell />,
          href: "#",
        },
        {
          title: "create",
          href: "#",
        },
        {
          title: <Profile />,
          href: "#",
        }
      ]}
    />
  )
}