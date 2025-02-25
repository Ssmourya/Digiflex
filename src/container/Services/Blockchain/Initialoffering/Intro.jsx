import React from 'react'
import Paragraph from '../../../../Layout/Paragraph'
import WrapperContainer from '../../../../Layout/WrapperContainer'
import Heading from '../../../../Layout/Heading'

const Intro = () => {
  return (
    <>
    <div className='pb-20'>

    <WrapperContainer>
        <Heading>
            <h1 className="flex justify-center item-center text-center mt-2 max-w-[500px] ">

        Initial Coin Offering 
        Quest Digiflex
            </h1>
        </Heading>

        <Paragraph>
    <span>
    Quest Degiflex is a leading provider of Initial Coin Offering (ICO) services, helping businesses launch and fund their blockchain projects. Our expert team ensures seamless token issuance, secure fundraising, and strategic market positioning. Whether you're a startup or an established enterprise, Quest Degiflex empowers you to navigate the world of digital assets with confidence.
    </span>
</Paragraph>
    </WrapperContainer>

    </div>
    </>
  )
}

export default Intro