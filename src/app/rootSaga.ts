import { all } from 'redux-saga/effects';
import { ReportStocksSaga } from '../page/Report-stocks/ReportStocksSaga';

export default function* rootSaga() {
  yield all([ReportStocksSaga()]);
}
