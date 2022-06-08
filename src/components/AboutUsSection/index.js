import React from 'react'
import InfoSection from '../../components/InfoSection'
import {
    homeObjOne,
    homeObjTwo,
    homeObjThree
  } from '../../components/InfoSection/Data'
import {
    AboutUsContainer,
    AboutUsWrapper
} from './AboutUsElements'

const AboutUs = () => {
    return (
        <>
            <AboutUsContainer id='about-us'>
                <AboutUsWrapper>
                    <InfoSection {...homeObjOne} />
                    <InfoSection {...homeObjTwo} />
                    <InfoSection {...homeObjThree} />
                </AboutUsWrapper>
            </AboutUsContainer>
        </>
    )
}

export default AboutUs