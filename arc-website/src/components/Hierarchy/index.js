import React from 'react';
import Icon1 from '../../images/teacher.svg';
import Icon2 from '../../images/pr.svg';
import Icon3 from '../../images/vice.svg';
import { HierarchyContainer, HierarchyCard, HierarchyH1, HierarchyH2, HierarchyP, HierarchyWrapper, HierarchyIcon } from './HierarchyElements'

const Hierarchy = () => {
  return (
    <HierarchyContainer id='hierarchy'>
        <HierarchyH1>Hierarchy of Arc</HierarchyH1>
        <HierarchyWrapper>
            <HierarchyCard>
                <HierarchyIcon src={Icon1}/>
                <HierarchyH2>Faculty Incharge</HierarchyH2>
                <HierarchyP>We have two faculties Binu KG from Mechanical Department and Vijay Ganesh from Electrical Department</HierarchyP>
            </HierarchyCard>
            <HierarchyCard>
                <HierarchyIcon src={Icon2}/>
                <HierarchyH2>President</HierarchyH2>
                <HierarchyP>Meet our dynamic and proactive president Harsha Bangera from Mechanical Department</HierarchyP>
            </HierarchyCard>
            <HierarchyCard>
                <HierarchyIcon src={Icon3}/>
                <HierarchyH2>Vice President</HierarchyH2>
                <HierarchyP>Know our Vice President Sharan Kumar from Computer Science Department</HierarchyP>
            </HierarchyCard>
        </HierarchyWrapper>
    </HierarchyContainer>
  )
}

export default Hierarchy