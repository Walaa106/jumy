import * as React from "react";

const content = ['Candy wheels', 'Breathe of life', 'Disks at sundown', 'Blowing bubbles', 'Perfect balance', 'Helmet of the Tiger', 'Candy wheels', 'Perfect balance'];

export default function ArtistWork({
  ...props
}) {
  return (
    <section py="6|12" {...props}>
        <div variant="container" px='12'>
            <div alignItems="center">
                {/* TODO: the style for this title is redundant so we have to create one component and reuse it */}
                <div fontFamily='AvertaDemo-EBI' fontSize='30px' fontWeight='bold' lineHeight='37px' mb='64px'>More works by Jumaker</div>
                <div display='flex' overflowX='auto'>
                    {content.map(item => {
                        return <SingleWork item={item} key={item} />
                    })}
                </div>
            </div>
        </div>
    </section>
  );
}


const SingleWork = ({item}) => (
    <div display='flex' flexDirection='column' mr='10px|30px' flex='0 0 auto|0 0 auto' >
        <img src={`images/artistWork/${item}.png`} w='100px|185px' height='auto' alt={item}/>
        {item}
    </div>
)
