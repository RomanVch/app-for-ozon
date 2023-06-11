import * as React from 'react';
import { Button } from '@mui/material';
import { utils, writeFile } from 'xlsx';

type RowForExel = {
  name:string,
  amount:number,
};

type DataForTableT = RowForExel[];

type GoodCardT = {
  dataForTable?:DataForTableT
  onClick?:()=>DataForTableT | null,
};

export const ExelDownload: React.FC<GoodCardT> = ({ dataForTable, onClick }) => {
  const onDownloadExelClick = ()=>{
    let parseTable;
    if (onClick && !dataForTable) {
      parseTable = onClick()?.map((row)=>{
        return {
          ['артикул']:row.name,
          ['количество']:row.amount,
        };
      });
    }  else if ( !onClick && dataForTable ) {
      parseTable = dataForTable.map((row)=>{
        return {
          ['артикул']:row.name,
          ['количество']:row.amount,
        };
      });
    } else {
      console.log('error');
    }
    const worksheet = utils.json_to_sheet(parseTable as any[]);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, 'Sheet1');

    writeFile(workbook, 'Накладная.xlsx');
  };
  return (
    <Button color="success"  variant='contained' onClick={onDownloadExelClick}>скачать exel</Button>
  );
};
