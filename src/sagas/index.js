import { call, put, takeEvery } from 'redux-saga/effects';

function* fetchPic() {
  try {
    const pic = yield call(() => fetch('https://api.giphy.com/v1/gifs/random?api_key=xgcnvYuqk4vP1WQQtWPz6F1A0B4WHHdA')
      .then(res => res.json())
      .then(res => {
        if (res.meta && res.meta.status === 200 && res.data) {
          return {
            id: res.data.id,
            src: res.data.image_url,
            title: res.data.title,
            date: new Date()
          }
        }
      })
    );

    yield put({
      type: 'PIC_FETCH_SUCCEEDED',
      pic
    });
  } catch({message}) {
    yield put({
      type: 'PIC_FETCH_FAILED',
      message
    });
  }
}

function* saga() {
  yield takeEvery('FETCH_PIC', fetchPic);
}

export default saga;
