import { put, call, takeEvery } from 'redux-saga/effects'
import * as actions from './actions'

export function* readHostInfo(api, { params }, { host, thunk }) {
  try {
    const hostInfo = yield call([api, api.post], `/${params.apiRequestParams.endpoint}`, { ...params.apiRequestParams })
    yield put(actions.hostInfoReadSuccess(host, hostInfo.d, { params }, thunk))
  } catch (e) {
    yield put(actions.hostInfoReadFailure(host, e, { params }, thunk))
  }
}

export function* watchHostInfoReadRequest(api, { payload, meta }) {
  yield call(readHostInfo, api, payload, meta)
}

export default function* ({ api }) {  
  yield takeEvery(actions.HOST_INFO_READ_REQUEST, watchHostInfoReadRequest, api)
}