import { read, utils } from 'xlsx';

export const convertTableToArray = async (file: File): Promise<any[][]> => {
  try {
    const fileBuffer = await file.arrayBuffer();
    const workbook = read(new Uint8Array(fileBuffer), {
      type: 'array',
      cellText: false,
      cellDates: true,
    });
    const worksheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[worksheetName];
    const result: any[][] = utils.sheet_to_json(worksheet, {
      header: 1,
      defval: '',
      raw: false,
      dateNF: 'dd-mm-yyyy',
    });

    // Удаление пустых столбцов
    if (result.length > 0) {
      const columnCount = result[0].length;
      const emptyColumns: number[] = [];

      for (let j = 0; j < columnCount; j++) {
        let isEmpty = true;
        for (let i = 0; i < result.length; i++) {
          if (result[i][j] !== '') {
            isEmpty = false;
            break;
          }
        }
        if (isEmpty) {
          emptyColumns.push(j);
        }
      }

      for (let i = 0; i < result.length; i++) {
        for (let j = emptyColumns.length - 1; j >= 0; j--) {
          result[i].splice(emptyColumns[j], 1);
        }
      }
    }

    const cleanResult: any[][] = result.filter((row) => {
      const checkResult = row.find((cell) => cell !== '');
      return !!checkResult;
    });

    const formattedResult: any[][] = cleanResult.map((row) => {
      const formattedRow: any[] = [];
      row.forEach((cell) => {
        if (cell instanceof Date) {
          const day = cell.getDate().toString().padStart(2, '0');
          const month = (cell.getMonth() + 1).toString().padStart(2, '0');
          const year = cell.getFullYear().toString();
          const formattedDate = `${day}.${month}.${year}`;
          formattedRow.push(formattedDate);
        } else {
          formattedRow.push(cell);
        }
      });
      return formattedRow;
    });

    return formattedResult;
  } catch (error) {
    throw error;
  }
};