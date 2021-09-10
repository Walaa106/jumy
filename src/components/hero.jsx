import * as React from "react"

export default function Block({
  subheading,
  heading,
  text,
  image,
  imagePosition = "left",
  buttons,
  bids,
  children,
  ...props
}) {
  return (
    <section py="6|12" {...props}>
      <div variant="container" px='12'>
        <div
          display="grid"
          gridAutoFlow="dense"
          col="1|1|2"
          gap="8|8|5.3rem"
          alignItems="center"
        >
          {image &&
            <img
              colStart={`null|null|${imagePosition === "left" ? 1 : 2}`}
              w="full"
              filter='drop-shadow(10px 10px 30px rgba(174, 174, 192, 0.4))'
              {...image}
            />
          }
          <div
            display="flex"
            flexDirection="column"
            alignItems="center|flex-start"
            alignSelf="center|flex-start"
            textAlign="center|left"
          >
            {heading && (
              <h1 variant="heading.h1" fontWeight="bolder" lineHeight="tight" fontSize='40px' fontFamily='AvertaDemo-EBI' letterSpacing='-2px'>
                {heading}
              </h1>
            )}
            {subheading && <p fontSize='15px' color='black' mt='11px' mb='46px'>{subheading}</p>}
            {text && (
              <p mt="2">
                {text}
              </p>
            )}
            <div>
              {bids}
              {buttons}
            </div>
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}