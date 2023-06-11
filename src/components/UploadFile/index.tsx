import './style.css';
import { Button } from '@mui/material';
import { useState } from 'react';

type UploadFileT = {
  onUpload: (file: File) => void
  text: string,
  type: string[]
};

export const UploadFile: React.FC<UploadFileT> = ({ onUpload, text, type }) => {
  const [isFilePicked, setIsFilePicked] = useState(false);

  const changeHandler = (event: any) => {
    const target = event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    setIsFilePicked(true);
    onUpload(file);
  };
  const typeString = type.join(', ');
  return (
    <Button variant="contained" component="label" color={isFilePicked ? 'success' : 'error'}>
      {text}
      <input type="file" hidden accept={typeString} onChange={changeHandler} />
    </Button>
  );
};
