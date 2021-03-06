import * as React from "react";
import { Icon } from "reflexjs";
import { Menu } from 'react-feather'

export default function Block({
  branding,
  links,
  ...props
}) {
  const [showMenu, setShowMenu] = React.useState(false);

  return (
    <header pt="6" pb='8' {...props}>
      <div variant="container">
        <div display="flex" alignItems="center">
          {branding && (
            <a
              href="/"
              display="flex"
              alignItems="center"
              _hover={{
                color: "primary",
              }}
            >
              {branding.icon && <Icon name={branding.icon} size="5" mr="2" />}
              <img src="images/jumy.png" w='39' alt='jumy-logo'/>
            </a>
          )}
          {/* Desktop */}
          <NavLinks links={links} display="none|grid" alignItems='center' mr='62'/>
          <button
            display="flex|none"
            p="2"
            size="14"
            ml="auto"
            onClick={() => setShowMenu(!showMenu)}
          >
            <Icon name="menu-alt" size="10" />
            <Menu />
          </button>
        </div>
      </div>
      {/* Mobile */}
      <div
        position="absolute"
        zIndex="1000"
        bg="background"
        top="24"
        left="4"
        right="4"
        px="4"
        rounded="xl"
        overflow="scroll"
        boxShadow="3xl"
        border="1px solid"
        borderColor="border"
        transform={`scale(${showMenu ? 1 : 0.95})`}
        visibility={showMenu ? "visible" : "hidden"}
        opacity={showMenu ? 1 : 0}
        transition="all .25s ease-in"
        transformOrigin="100% 0"
        maxHeight="95vh"
        display="block|none"
      >
        <NavLinks links={links} py="8" />
      </div>
    </header>
  );
}

export function NavLinks({ links, ...props }) {
  return links.length ? (
    <div
      display="grid"
      col={`1|repeat(${links.length}, auto)`}
      gap="8|10|12"
      ml="auto"
      {...props}
    >
      {links.map((link, index) => (
        <a
          key={index}
          variant="text"
          href={link.href}
          textAlign="left|center"
          fontSize="xl|md"
          px="4|0"
          display='flex'
          alignItems='center'
          _hover={{
            color: "primary",
          }}
        >
          {link.title}
        </a>
      ))}
    </div>
  ) : null;
}
