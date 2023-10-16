import React from 'react';
import { Typography } from '@mui/material';

const Percent: React.FC<{ children: number | string }> = ({ children }) => {
  const value = Math.round(+children * 100);
  const color = value > 0 ? 'green' : value < 0 ? 'red' : '';
  return (
    <Typography textAlign='right' variant={'body2'} color={color}>
      {value}%
    </Typography>
  );
};

export default Percent;
