import * as React from "react";
import { Icon } from "reflexjs";
import { Instagram, Twitter } from 'react-feather'

export default function Block({
  ...props
}) {
  return (
    <section py="6|12" {...props}>
        <div variant="container" px='12'>
            <div display="grid" gridAutoFlow="dense" col="1|1|2" gap="8|8|5.3rem" alignItems="center">
                <History />
                <Artist />
            </div>
        </div>
    </section>
  );
}


const History = () => (
    <div>
        {/* title */}
        <div fontFamily='AvertaDemo-EBI' fontSize='30px' fontWeight='bold' lineHeight='37px' mb='64px'>History</div>
        <div mb='33px' lineHeight='30px' fontFamily='AvertaDemo'>
            <div mb='1'>@Felicia bought from @Jumaker for 0.5 ETH ($76)</div>
            <div fontFamily='GilroyLight'>One minute ago [view tx]</div>
        </div>
        <div  lineHeight='30px'>
            <div mb='1'>Created by @Jumaker</div>
            <div fontFamily='GilroyLight'>One hour ago [view tx]</div>
        </div>
    </div>
)

const Artist = () => (
    <div>
        {/* title */}
        <div fontFamily='AvertaDemo-EBI' fontSize='30px' fontWeight='bold' lineHeight='37px' mb='64px'>Artist</div>
        <div mb='33px' lineHeight='30px' fontFamily='AvertaDemo' display='flex'>
            <div position='relative' mr='29px'>
                <img src='images/jumaker.png' w='74px' position='relative' />
                <img src='images/officialIcon.png' w='32px' h='32px' position='absolute' right='-10px' top='53px'/>
            </div>
            <div display='flex' flexDirection='column' alignItems='flex-start' justifyContent='flex-end'>
                <div>@Jumaker</div>
                <div fontFamily='GilroyLight'>United Arab Emirates</div>
            </div>
        </div>
        <div  lineHeight='30px'>
            {/* #TODO : this should be forloop based on content*/}
            <div display='flex' alignItems='center' mb='5px'>
                <Instagram size='15' />
                <div ml='18px'>@Jumaker</div>
            </div>
            <div display='flex' alignItems='center'>
                <Twitter size='15' fill='#000' />
                <div ml='18px'>@Jumaker</div>
            </div>
        </div>
    </div>
)