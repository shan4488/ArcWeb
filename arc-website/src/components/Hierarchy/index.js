import React from 'react';
import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/svg-2.svg';
import Icon3 from '../../images/svg-3.svg';
import { HierarchyContainer, HierarchyCard, HierarchyH1, HierarchyH2, HierarchyP, HierarchyWrapper, HierarchyIcon } from './HierarchyElements'

const Hierarchy = () => {
  return (
    <HierarchyContainer id='hierarchy'>
        <HierarchyH1>Hierarchy of Arc</HierarchyH1>
        <HierarchyWrapper>
            <HierarchyCard>
                <HierarchyIcon src={Icon1}/>
                <HierarchyH2>President</HierarchyH2>
                <HierarchyP>Our Honourable president, dedicated to serve the club at it's best</HierarchyP>
            </HierarchyCard>
            <HierarchyCard>
                <HierarchyIcon src={Icon2}/>
                <HierarchyH2> Vice President</HierarchyH2>
                <HierarchyP>Our Honourable Vice president, dedicated to serve the club at it's best</HierarchyP>
            </HierarchyCard>
            <HierarchyCard>
                <HierarchyIcon src={Icon3}/>
                <HierarchyH2>Home affairs</HierarchyH2>
                <HierarchyP>Our Honourable Home affairs minister, dedicated to serve the club at it's best</HierarchyP>
            </HierarchyCard>
        </HierarchyWrapper>
    </HierarchyContainer>
  )
}

export default Hierarchy