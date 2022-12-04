import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

type GoodCardT = {
  name: string;
  amount?: number;
  id: string;
  onClick: (id: string) => void;
  onCount?: (count: number) => void;
};

export const GoodCard: React.FC<GoodCardT> = ({ name, amount, id, onClick }) => {
  return (
    <Card sx={{ width: 'auto', height: 70, marginRight: '10px', marginBottom: '10px' }}>
      <div onClick={() => onClick(id)}>
        <CardContent>
          <Typography variant="body2">{name}</Typography>
          {amount !== undefined ? <Typography variant="body2">{amount} шт.</Typography> : null}
        </CardContent>
      </div>
    </Card>
  );
};
