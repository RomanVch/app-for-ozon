import { Paper, Typography } from '@mui/material';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { CustomLink } from '../CustomLink/CustomLink';
import { StockType } from '../../utils/Api';
import { StockItemMenu } from './StockItemMenu/StockItemMenu';

type MenuItemType = {
  id: string;
  name: string;
  stock?: StockType;
};

export const MenuItem: React.FC<MenuItemType> = ({ id, name, stock }) => {
  const location = useLocation().pathname;

  return (
    <Paper className={'Menu-Item'} elevation={3}>
      <CustomLink
        to={location + '/' + id}
        children={
          <Typography variant="h6" component="h6">
            {name}
          </Typography>
        }
      />
      <div>{stock ? <StockItemMenu stock={stock} /> : null}</div>
    </Paper>
  );
};
