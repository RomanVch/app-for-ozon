import './style.css';
import { Button, Paper, Typography } from '@mui/material';
import { ChangeEventHandler, useState } from 'react';

type UploadFileT = {
  onUpload: (file: File) => void;
};

export const UploadFile: React.FC<UploadFileT> = ({ onUpload }) => {
  const [isFilePicked, setIsFilePicked] = useState(false);

  const changeHandler = (event: any) => {
    const target = event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    setIsFilePicked(true);
    onUpload(file);
  };

  return (
    <Button variant="contained" component="label" color={isFilePicked ? 'success' : 'error'}>
      Upload File
      <input type="file" hidden accept=".png, .jpg, .jpeg" onChange={changeHandler} />
    </Button>
  );
};
