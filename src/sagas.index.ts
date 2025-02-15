import { all, fork } from 'redux-saga/effects';
// import { watchFetchData } from './sagas/fetchDataSaga';
// import { watchSubmitData } from './sagas/submitDataSaga';

export function* rootSaga() {
    yield all([
        // fork(watchFetchData),
        // fork(watchSubmitData),
    ]);
}