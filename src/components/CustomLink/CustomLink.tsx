import { Paper, Typography } from '@mui/material';
import React, { ReactChildren } from 'react';
import { Link, NavLink, useLocation, useMatch } from 'react-router-dom';

type MenuItemType = {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
};

export const CustomLink: React.FC<MenuItemType> = ({ to, onClick, children }) => {
  const match = useMatch(to);
  const onClicker = () => onClick && onClick();
  onClicker();
  return (
    <NavLink to={to} style={match ? { color: 'red' } : { color: 'dark' }}>
      {children}
    </NavLink>
  );
};
