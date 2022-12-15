import React from 'react';
import Card from '@mui/material/Card';
import { Button, IconButton, TextField } from '@mui/material';
import './styles.css';
import { useDispatch } from 'react-redux';
import { delModal } from './../../../page/Home/Redux/HomeReducer';

export const Auth: React.FC = () => {
  const dispatch = useDispatch();
  const onExit = () => {
    dispatch(delModal('Auth'));
  };
  return (
    <div className="auth-modal">
      <Card>
        <TextField required id="outlined-required" label="OzonId" />
        <Button> Log in </Button>
        <IconButton aria-label="delete" className="close-auth" onClick={onExit}>
          x
        </IconButton>
      </Card>
    </div>
  );
};
