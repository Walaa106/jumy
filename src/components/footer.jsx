import * as React from "react"

export default function Block({
  name,
  copyright,
  links,
  iconLinks,
  children,
  ...props
}) {
  return (
    <section py={[8, 10, 12]} {...props} bg='black' color='white'>
        <div variant="container" px='16|110px' pt='160px' pb='80px'>
            <div mb='auto|180px'>
                <div fontSize='78px' fontFamily='AvertaDemo' lineHeight='96.41px' letterSpacing='-3px'>Are you an Artist?</div>
                <div fontSize='73px' fontFamily='GilroyLight' lineHeight='85.55px' letterSpacing='-4px'>Tell us about you</div>
            </div>
            <div fontFamily='AvertaDemo'>
                <div fontSize='2mxl'  mb='36px'>hello@jumy.co</div>
                <div display='flex' flexDirection='column' fontSize='smd' mb='17px' lineHeight='17.3px'>
                    <span>The Offices 4, One Central</span>
                    <span>Dubai, United Arab Emirates</span>
                </div>
                <div fontSize='smd' lineHeight='17.3px'>
                    All right reserved.
                </div>
            </div>
        </div>
    </section>
  )
}
