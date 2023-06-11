import './style.css';
import { UploadFile } from '../../components/UploadFile';
import { convertTableToArray } from '../../utils/convertTableToArray';
import { useState } from 'react';
import { Checkbox } from '@mui/material';
import { ExelDownload } from '../../components/ExelDownload';

const patternsArticul = [
  /[A-Z]{2}\d{4}/,
  /[A-Z]{2}\d{3}/,
  /[A-Z]\d{3}/,
  /[A-Z]\d{4}/,
  /[A-Z]{2}\d{4}/,
  /\d{4}-[A-Z]\d/,
  /\d{4}\s*-\s*[A-Z]\d{2}/,
  /\d{4}\s+[A-Z]\d/,
];

const colorsPattern = [
  /бежевый/i,
  /бирюзовый/i,
  /бордовый/i,
  /голубой/i,
  /желтый/i,
  /зеленый/i,
  /золотой/i,
  /коричневый/i,
  /красный/i,
  /лиловый/i,
  /малиновый/i,
  /морская волна/i,
  /оранжевый/i,
  /персиковый/i,
  /розовый/i,
  /салатовый/i,
  /серебряный/i,
  /серый/i,
  /синий/i,
  /сиреневый/i,
  /солнечный/i,
  /фиолетовый/i,
  /хаки/i,
  /холодный/i,
  /черный/i,
  /чёрный/i,
  /белый/i,
];
const colorMapping = {
  'бежевый': 'beige',
  'бирюзовый': 'turquoise',
  'бордовый': 'burgundy',
  'голубой': 'light blue',
  'желтый': 'yellow',
  'зеленый': 'green',
  'золотой': 'gold',
  'коричневый': 'brown',
  'красный': 'red',
  'лиловый': 'lilac',
  'малиновый': 'crimson',
  'морская волна': 'sea wave',
  'оранжевый': 'orange',
  'персиковый': 'peach',
  'розовый': 'pink',
  'салатовый': 'lime green',
  'серебряный': 'silver',
  'серый': 'gray',
  'синий': 'blue',
  'сиреневый': 'lavender',
  'солнечный': 'sunny',
  'фиолетовый': 'purple',
  'хаки': 'khaki',
  'холодный': 'cool',
  'черный': 'black',
  'чёрный': 'black',
  'белый': 'white',
};

export const OrderDelivery = () => {
  const [arrayParse, setArrayParse] = useState<string[][] | null>([]);
  const [glassesFilter, setGlassesFilter] = useState<boolean>(false);
  const onUpload = async (file: File) => {
    try {
      const dataTable = await convertTableToArray(file);
      let headerTable: string[] = [];
      const filteredData:string[][] = dataTable.filter((row, indexRow)=>{
        if (row[0] === '' || row[0] === '№') {
          if (row[1] && dataTable[indexRow + 1] && dataTable[indexRow + 1][0] !== undefined && !Number.isNaN(+dataTable[indexRow + 1][0])) {
            headerTable = row;
            console.log(row, 'row');
            return false;
          } else {
            console.log(2);
            return false;
          }
        } else if (!isNaN(+row[0])) {
          console.log(3);
          return true;
        }
      });
      setArrayParse([headerTable, ...filteredData ]);
    } catch (e) {
      console.log(e);
    }
  };
  const onGetTable = ():{ amount: string; name: string }[] | null =>{
    function findColorInString(str:string) {
      console.log(str);
      for (const pattern of colorsPattern) {
        if (pattern.test(str)) {
          console.log('dddd', str.match(pattern));
          // @ts-ignore
          return str.toLowerCase().match(pattern)[0];
        }
      }
      return null;
    }
    if (!arrayParse) { return null; }
    const headerTable = arrayParse[0];
    const dataTable = arrayParse.slice(1);
    const patternOptic = /[+-]\b\d{1,2}\b/;
    const amountIndex  = headerTable.findIndex((value) => value.toLowerCase().includes('количество') || value.toLowerCase().includes('кол-во'));
    if (glassesFilter) {
      const filterArray = dataTable.filter((row)=>{
        return patternOptic.test(row[1]);
      });
      return  filterArray.map((row)=>{
        let result;
        for (const pattern of patternsArticul) {
          const match = row[1].match(pattern);
          const patternOpticDot = /[-+]\d{1,2}?([.,]\d{1,2})?/g;
          const optic =  row[1].match(patternOpticDot);
          const color = findColorInString(row[1]);
          console.log(color, '1234');
          if (match && optic) {
            result = match[0] + ' (' + optic[0] + ') ' + (colorMapping[color as 'черный'] ? colorMapping[color as 'черный'] : '');
            break;
          }
        }
        return { name: result as string, amount: row[amountIndex] };
      });
    } else {
      console.log('НЕ ФИЛЬТЕР');
      return dataTable.map((row) => {
        return { name: row[1] as string, amount: row[amountIndex] };
      });
    }
  };


  return (
    <div className="order-delivery">
      <h2>Загрузка файла:</h2>
      <UploadFile onUpload={onUpload} text={'upload table'} type={['.xlsx', '.xls', '.csv' ]} />
      <h2>Фильтры:</h2>
      <div style={{ display: 'flex', justifyContent:'center' }}> <Checkbox value={glassesFilter} onChange={()=>{setGlassesFilter(prev=>!prev);}}/> <p> Очки </p> </div>
      <h2>Результат:</h2>
      <button onClick={onGetTable}>расчет</button>
      {
        // @ts-ignore
        arrayParse?.length ? <ExelDownload onClick={onGetTable} /> : 'Загрузи таблицу!'}
    </div>
  );
};
