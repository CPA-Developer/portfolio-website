import React from 'react';
import {SidebarContainer, Icon, CloseIcon,
    SidebarBtnWrap, SidebarRoute,SidebarLink,SidebarMenu,SidebarWrapper
} from './SidebarElement';

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen ={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon/>
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
            <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
            <SidebarLink to="Education" onClick={toggle}>Education</SidebarLink>
            <SidebarLink to="Skills" onClick={toggle}>Skills</SidebarLink>
            
        </SidebarMenu>
        <SidebarBtnWrap>
            <SidebarRoute to="Contact" onClick={toggle}>Contact</SidebarRoute>
        </SidebarBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
}

export default Sidebar;
