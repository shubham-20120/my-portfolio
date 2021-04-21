import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'About Me',
    path: 'about',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Skills',
    path: 'skills',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Projects',
    path: 'projects',
    icon: <FaIcons.FaProjectDiagram />,
    cName: 'nav-text'
  },
  {
    title: 'Contact Me',
    path: 'contact',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  }
];