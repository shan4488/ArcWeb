import React from 'react'
import {SidebarContainer, CloseIcon, Icon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute} from './SidebarElements'

const Sidebar = ({ isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
                <SidebarLink to="achievement" onClick={toggle}>Achievements</SidebarLink>
                <SidebarLink to="hierarchy" onClick={toggle}>Hierarchy</SidebarLink>
                <SidebarLink to="connect" onClick={toggle}>Connect</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute href="https://form.jotform.com/222442335902449" target="_blank" aria-label="Get Membership">Join Us</SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar