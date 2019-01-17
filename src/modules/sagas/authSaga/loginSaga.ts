import { call, put } from 'redux-saga/effects';
import { loginError, LoginFetch, loginData } from '../../actions';
import { API } from '../../../api';

export function* loginSaga(action: LoginFetch) {
    try {
        const user = yield call(API.post(), '/api/v2/barong/identity/sessions', action.payload);
        yield put(loginData(user));
        document.cookie = 'session=true; path=/';
    } catch (error) {
        yield put(loginError(error));
    }
}
