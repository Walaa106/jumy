import * as React from "react"

const socialContent = ['Instagram','Twitter' ,'Discord' ,'Terms' ,'FAQ', 'Policy'];

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
        <div variant="container" px='8|110px' pt='160px' pb='80px'>
            <div mb='auto|180px'>
                <div fontSize='78px' fontFamily='AvertaDemo' lineHeight='96.41px' letterSpacing='-0.03em'>Are you an Artist?</div>
                <div fontSize='73px' fontFamily='GilroyLight' lineHeight='85.55px' letterSpacing='-0.04em'>Tell us about you</div>
            </div>
            <div display='grid' col='1|2' fontFamily='AvertaDemo' gap='12'>
                <div>
                    <div fontSize='2mxl'  mb='36px'>hello@jumy.co</div>
                    <div display='flex' flexDirection='column' fontSize='smd' mb='17px' lineHeight='17.3px'>
                        <span>The Offices 4, One Central</span>
                        <span>Dubai, United Arab Emirates</span>
                    </div>
                    <div fontSize='smd' lineHeight='17.3px'>
                        All right reserved.
                    </div>
                </div>
                <div display='grid' col='3' fontFamily='GilroyLight' gap='4|5rem'>
                    {socialContent.map(item => (
                        <span fontSize='2sxl' letterSpacing='-0.03em' key={item}>{item}</span>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}
