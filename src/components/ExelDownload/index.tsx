import * as React from 'react';
import { Button } from '@mui/material';
import { utils, writeFile } from 'xlsx';

type RowForExel = {
  name:string,
  amount:number,
};

type DataForTableT = RowForExel[];

type GoodCardT = {
  dataForTable:DataForTableT
};

export const ExelDownload: React.FC<GoodCardT> = ({ dataForTable }) => {
  const onDownloadExelClick = ()=>{
    const parseTable = dataForTable.map((row)=>{
      return {
        ['артикул']:row.name,
        ['количество']:row.amount,
      };
    });
    const worksheet = utils.json_to_sheet(parseTable);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, 'Sheet1');

    writeFile(workbook, 'Накладная.xlsx');
  };
  return (
    <Button color="success"  variant='contained' onClick={onDownloadExelClick}>скачать exel</Button>
  );
};
